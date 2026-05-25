document.addEventListener("DOMContentLoaded", () => {
    // Récupérer tous les accordéons
    const accordions = document.querySelectorAll('.theme-accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', (e) => {
            // Si on clique sur le summary (le titre) pour l'ouvrir
            if (e.target.closest('summary') && !accordion.hasAttribute('open')) {
                // Fermer tous les autres
                accordions.forEach(otherAccordion => {
                    if (otherAccordion !== accordion && otherAccordion.hasAttribute('open')) {
                        otherAccordion.removeAttribute('open');
                    }
                });
            }
        });
    });
});