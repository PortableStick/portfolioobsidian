document.addEventListener("nav", () => {
  // Créer l'overlay si elle n'existe pas
  let overlay = document.querySelector('.popup-overlay');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'popup-overlay';
    document.body.appendChild(overlay);
  }

  // Gérer les clics sur les liens popup
  const popupLinks = document.querySelectorAll('.popup-link');
  popupLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = (link as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const popup = document.getElementById(targetId || '');
      
      if (popup) {
        popup.classList.add('active');
        overlay?.classList.add('active');
        
        // Ajouter bouton de fermeture s'il n'existe pas
        if (!popup.querySelector('.popup-close')) {
          const closeBtn = document.createElement('button');
          closeBtn.className = 'popup-close';
          closeBtn.innerHTML = '×';
          closeBtn.addEventListener('click', closePopup);
          popup.appendChild(closeBtn);
        }
      }
    });
  });

  // Fermer popup en cliquant sur l'overlay
  overlay.addEventListener('click', closePopup);

  function closePopup() {
    document.querySelectorAll('.popup-content').forEach(popup => {
      popup.classList.remove('active');
    });
    overlay?.classList.remove('active');
  }

  // Fermer avec la touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closePopup();
    }
  });
});