function initSidebar() {
    const sidebar = document.getElementById('main-sidebar');
    const toggleBtn = document.getElementById('toggle-sidebar');
    const pageWrapper = document.querySelector('.page-wrapper');

    // 1. Lire la préférence sauvegardée au chargement de la page
    const savedState = localStorage.getItem('sidebar_state');
    
    // Si l'état sauvegardé est "collapsed", on replie la sidebar immédiatement
    if (savedState === 'collapsed' && sidebar && pageWrapper) {
        sidebar.classList.add('collapsed');
        pageWrapper.classList.add('sidebar-collapsed');
    }

    // 2. Écouter le clic sur le bouton
    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', () => {
            // Basculer les classes
            sidebar.classList.toggle('collapsed');
            if(pageWrapper) pageWrapper.classList.toggle('sidebar-collapsed');
            
            // Mémoriser le nouvel état dans le localStorage
            if (sidebar.classList.contains('collapsed')) {
                localStorage.setItem('sidebar_state', 'collapsed');
            } else {
                localStorage.setItem('sidebar_state', 'expanded');
            }
        });
    }
}