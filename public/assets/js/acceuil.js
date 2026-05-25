document.addEventListener("DOMContentLoaded", () => {
    // On sélectionne tous les boutons d'onglets et les conteneurs d'onglets
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // On retire la classe "active" de tous les boutons et panneaux
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // On ajoute la classe "active" au bouton cliqué
            btn.classList.add('active');

            // On récupère l'ID du panneau correspondant via data-target et on l'active
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });
});