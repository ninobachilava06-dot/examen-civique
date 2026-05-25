// Fonction pour charger un composant HTML
async function loadComponent(elementId, filePath, callback) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Erreur lors du chargement de ${filePath}`);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
        if (callback) callback(); // Exécute le js spécifique au composant une fois chargé
    } catch (error) {
        console.error("Erreur d'inclusion de composant :", error);
    }
}

// Fonction pour injecter le bouton mobile dynamiquement
function injectMobileMenuButton() {
    // Crée le bouton
    const btn = document.createElement('button');
    btn.id = 'mobile-menu-toggle';
    btn.setAttribute('aria-label', 'Ouvrir le menu');
    
    // Ajoute l'icône SVG (Menu Burger)
    btn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
    `;
    
    // L'ajoute à la page (dans le body)
    document.body.appendChild(btn);

    // Ajoute l'action : quand on clique, ça ouvre la sidebar
    btn.addEventListener('click', () => {
        const sidebar = document.getElementById('main-sidebar');
        if (sidebar) {
            sidebar.classList.toggle('mobile-open');
            btn.classList.toggle('is-open'); 
        }
    });
}

// Initialisation globale
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. On injecte le bouton mobile automatiquement sur toutes les pages
    injectMobileMenuButton();

    // 2. On charge la sidebar, puis on initialise son JS (repli et langue)
    loadComponent('sidebar-container', '../components/sidebar.html', () => {
        if (typeof initSidebar === 'function') initSidebar();
        if (typeof initLang === 'function') initLang();
    });

    // 3. On charge le footer
    loadComponent('footer-container', '../components/footer.html');
});