document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('open-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuToggle && mobileMenu && openIcon && closeIcon) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
