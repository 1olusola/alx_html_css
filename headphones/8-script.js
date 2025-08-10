/* ===  vanilla-JS hamburger toggle  === */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

function toggleMenu() {
  const open = nav.classList.toggle('nav--open');
  hamburger.setAttribute('aria-expanded', open);
}

// click
hamburger.addEventListener('click', toggleMenu);

// keyboard ESC to close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
    toggleMenu();
    hamburger.focus();
  }
});
