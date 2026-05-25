function initLang() {
    const langSwitch = document.getElementById('lang-switch-checkbox');
    const body = document.body;

    // Récupérer la préférence sauvegardée
    const savedLang = localStorage.getItem('site_lang');
    if (savedLang === 'geo') {
        body.classList.add('is-georgian');
        if (langSwitch) langSwitch.checked = true;
    }

    if (langSwitch) {
        langSwitch.addEventListener('change', (e) => {
            if (e.target.checked) {
                body.classList.add('is-georgian');
                localStorage.setItem('site_lang', 'geo');
            } else {
                body.classList.remove('is-georgian');
                localStorage.setItem('site_lang', 'fr');
            }
        });
    }
}