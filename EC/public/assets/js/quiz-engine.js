// quiz-engine.js — Moteur de quiz Carte de Résident (CR)
// Source : formation-civique.interieur.gouv.fr

import { questionsCR_PVR } from '../../../includes/CR/PVR.js';
import { questionsCR_SIP } from '../../../includes/CR/SIP.js';
import { questionsCR_DD  } from '../../../includes/CR/DD.js';
import { questionsCR_HGC } from '../../../includes/CR/HGC.js';
import { questionsCR_VSF } from '../../../includes/CR/VSF.js';
import { misesEnSituation } from '../../../includes/CR/OP.js';

const POOLS = {
    PVR: questionsCR_PVR,
    SIP: questionsCR_SIP,
    DD:  questionsCR_DD,
    HGC: questionsCR_HGC,
    VSF: questionsCR_VSF,
    OP:  misesEnSituation,
};

// Répartition officielle de l'examen CR : 40 questions
const EXAM_DIST = { PVR: 5, SIP: 6, DD: 5, HGC: 8, VSF: 4, OP: 12 };

const shuffle  = arr => [...arr].sort(() => Math.random() - 0.5);
const isGeo    = ()  => document.body.classList.contains('is-georgian');
const t        = obj => isGeo() ? obj.geo : obj.fr;   // helper : texte dans la langue active

let state = {
    questions:      [],
    index:          0,
    score:          0,
    correctionMode: 'instant',
    isFlashcard:    false,
    answered:       false,
    view:           'config',  // 'config' | 'question' | 'results'
};

let uiState = {
    quizMode: 'theme',   // 'theme' | 'exam' | 'all'
    fcMode:   'theme',   // 'theme' | 'random40' | 'all'
};

// ─── ONGLETS ───────────────────────────────────────────────
window.switchTab = (tab, btn) => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.isFlashcard = (tab === 'revision');
    document.getElementById('quiz-tab-content').style.display = state.isFlashcard ? 'none' : '';
    document.getElementById('fc-tab-content').style.display   = state.isFlashcard ? ''     : 'none';
};

// ─── SÉLECTION DES TUILES ──────────────────────────────────
window.selectMode = (context, mode, el) => {
    el.closest('.mode-tiles').querySelectorAll('.mode-tile').forEach(t => t.classList.remove('active'));
    el.classList.add('active');

    if (context === 'quiz') {
        uiState.quizMode = mode;
        document.getElementById('theme-row').style.display = (mode === 'theme') ? '' : 'none';
    } else {
        uiState.fcMode = mode;
        document.getElementById('fc-theme-row').style.display = (mode === 'theme') ? '' : 'none';
    }
};

// ─── DÉMARRAGE ─────────────────────────────────────────────
document.getElementById('start-btn').addEventListener('click', startQuiz);

function buildExamPool() {
    const pool = [];
    for (const [theme, count] of Object.entries(EXAM_DIST)) {
        pool.push(...shuffle(POOLS[theme] || []).slice(0, count));
    }
    return shuffle(pool);
}

function startQuiz() {
    state.correctionMode = (document.getElementById('correction-mode') || {}).value || 'instant';
    let pool;

    if (state.isFlashcard) {
        switch (uiState.fcMode) {
            case 'theme': {
                const theme = document.getElementById('fc-theme-select').value;
                pool = shuffle([...(POOLS[theme] || [])]);
                break;
            }
            case 'random40':
                pool = shuffle(Object.values(POOLS).flat()).slice(0, 40);
                break;
            default:
                pool = shuffle(Object.values(POOLS).flat());
        }
    } else {
        switch (uiState.quizMode) {
            case 'theme': {
                const theme = document.getElementById('theme-select').value;
                pool = shuffle([...(POOLS[theme] || [])]);
                break;
            }
            case 'exam':
                pool = buildExamPool();
                break;
            default:
                pool = shuffle(Object.values(POOLS).flat());
        }
    }

    state.questions = pool;
    state.index     = 0;
    state.score     = 0;
    state.answered  = false;
    state.view      = 'question';

    document.getElementById('quiz-config').style.display  = 'none';
    document.getElementById('quiz-display').style.display = 'block';
    updateProgress();
    state.isFlashcard ? showFlashcard() : showQuestion();
}

// ─── PROGRESSION ───────────────────────────────────────────
function updateProgress() {
    const pct = state.questions.length
        ? (state.index / state.questions.length) * 100
        : 0;
    document.getElementById('progress-fill').style.width = pct + '%';
    const lbl = document.getElementById('progress-label');
    if (lbl) lbl.textContent = `${state.index} / ${state.questions.length}`;
}

// ─── QUESTION ──────────────────────────────────────────────
function showQuestion() {
    state.answered = false;
    const q    = state.questions[state.index];
    const opts = shuffle([...q.options]);
    const next = state.index + 1 < state.questions.length;

    document.getElementById('question-container').innerHTML = `
        <div class="question-box">
            <div class="question-number">Q${state.index + 1} / ${state.questions.length}</div>
            <h3 class="question-text">${t(q.question)}</h3>
            <div class="options-grid">
                ${opts.map(opt => `
                    <button class="option-card" data-correct="${opt.isCorrect}" onclick="handleAnswer(this)">
                        ${t(opt.text)}
                    </button>
                `).join('')}
            </div>
            <div id="feedback" class="feedback-box" style="display:none">
                ${t(q.remark)}
            </div>
            <div class="nav-row" id="nav-row" style="display:none">
                <button class="main-btn" onclick="nextStep()">
                    ${next
                        ? (isGeo() ? 'შემდეგი კითხვა →' : 'Question suivante →')
                        : (isGeo() ? 'შედეგების ნახვა'  : 'Voir les résultats')}
                </button>
            </div>
        </div>`;
}

// ─── RÉPONSE ───────────────────────────────────────────────
window.handleAnswer = (el) => {
    if (state.answered) return;
    state.answered = true;

    const correct = el.dataset.correct === 'true';
    document.querySelectorAll('.option-card').forEach(c => {
        c.disabled = true;
        if (c.dataset.correct === 'true') c.classList.add('correct');
        else if (c === el && !correct) c.classList.add('wrong');
    });

    if (correct) state.score++;
    if (state.correctionMode === 'instant') {
        document.getElementById('feedback').style.display = 'flex';
    }
    document.getElementById('nav-row').style.display = 'flex';
};

window.nextStep = () => {
    state.index++;
    updateProgress();
    if (state.index < state.questions.length) {
        state.isFlashcard ? showFlashcard() : showQuestion();
    } else {
        showResults();
    }
};

// ─── QUITTER ───────────────────────────────────────────────
window.quitQuiz = () => {
    state.questions = [];
    state.index     = 0;
    state.score     = 0;
    state.view      = 'config';
    document.getElementById('quiz-progress-bar').style.display = '';
    document.getElementById('progress-label').style.display    = '';
    document.getElementById('progress-fill').style.width       = '0%';
    document.getElementById('progress-label').textContent      = '0 / 0';
    document.getElementById('question-container').innerHTML    = '';
    document.getElementById('quiz-config').style.display       = '';
    document.getElementById('quiz-display').style.display      = 'none';
};

// ─── RÉSULTATS ─────────────────────────────────────────────
function showResults() {
    state.view = 'results';
    document.getElementById('quiz-progress-bar').style.display = 'none';
    document.getElementById('progress-label').style.display    = 'none';

    const retry = isGeo() ? 'თავიდან' : 'Recommencer';

    if (state.isFlashcard) {
        // Pas de score pour les flashcards
        const msg = isGeo()
            ? `${state.questions.length} ბარათი განხილული`
            : `${state.questions.length} fiche${state.questions.length > 1 ? 's' : ''} révisée${state.questions.length > 1 ? 's' : ''}`;
        document.getElementById('question-container').innerHTML = `
            <div class="results-box">
                <div class="score-circle pass">✓</div>
                <h2 class="results-title">${isGeo() ? 'რევიზია დასრულდა !' : 'Révision terminée !'}</h2>
                <p class="results-score">${msg}</p>
                <button class="main-btn" onclick="quitQuiz()" style="margin-top:24px">${retry}</button>
            </div>`;
    } else {
        const pct    = Math.round((state.score / state.questions.length) * 100);
        const passed = pct >= 50;
        const bravo  = isGeo() ? '✓ ბრავო!'         : '✓ Bravo !';
        const amelio = isGeo() ? 'გასაუმჯობესებელია' : 'À améliorer';
        const score  = isGeo()
            ? `${state.score} სწორი პასუხი ${state.questions.length}-დან`
            : `${state.score} bonne${state.score > 1 ? 's' : ''} réponse${state.score > 1 ? 's' : ''} sur ${state.questions.length}`;
        document.getElementById('question-container').innerHTML = `
            <div class="results-box">
                <div class="score-circle ${passed ? 'pass' : 'fail'}">${pct}%</div>
                <h2 class="results-title">${passed ? bravo : amelio}</h2>
                <p class="results-score">${score}</p>
                <button class="main-btn" onclick="quitQuiz()" style="margin-top:24px">${retry}</button>
            </div>`;
    }
}

// ─── FLASHCARDS ────────────────────────────────────────────
function showFlashcard() {
    const q    = state.questions[state.index];
    const best = q.options.find(o => o.isCorrect) || q.options[0];
    const next = state.index + 1 < state.questions.length;

    document.getElementById('question-container').innerHTML = `
        <div class="flashcard" id="fc" onclick="flipCard()">
            <div class="flashcard-inner">
                <div class="card-front">
                    <p class="card-question">${t(q.question)}</p>
                    <p class="card-hint">${isGeo() ? 'გადასაბრუნებლად დააჭირეთ' : 'Cliquez pour retourner'}</p>
                </div>
                <div class="card-back">
                    <p class="card-answer">${t(best.text)}</p>
                    <hr class="card-divider">
                    <p class="card-remark">${t(q.remark)}</p>
                </div>
            </div>
        </div>
        <div style="text-align:center;margin-top:20px">
            <span style="color:var(--text-muted);font-size:0.85rem">${state.index + 1} / ${state.questions.length}</span>
        </div>
        <div class="nav-row" style="margin-top:16px">
            <button class="main-btn" onclick="nextStep()">
                ${next
                    ? (isGeo() ? 'შემდეგი ბარათი →' : 'Carte suivante →')
                    : (isGeo() ? 'დასრულება'         : 'Terminer')}
            </button>
        </div>`;
}

window.flipCard = () => document.getElementById('fc')?.classList.toggle('flipped');

// ─── TRADUCTION DES SELECTS ────────────────────────────────
function updateSelectsLang() {
    document.querySelectorAll('option[data-geo]').forEach(opt => {
        opt.textContent = isGeo() ? opt.dataset.geo : opt.dataset.fr;
    });
}

// ─── RE-RENDU AU CHANGEMENT DE LANGUE ──────────────────────
new MutationObserver(() => {
    updateSelectsLang();
    if (state.view === 'question' && state.index < state.questions.length) {
        state.isFlashcard ? showFlashcard() : showQuestion();
    } else if (state.view === 'results') {
        showResults();
    }
}).observe(document.body, { attributes: true, attributeFilter: ['class'] });

updateSelectsLang();
