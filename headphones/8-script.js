/* === vanilla-JS hamburger === */
const hamburger = document.getElementById('hamburger');
const nav       = document.getElementById('nav');

function toggleMenu(open) {
  const isOpen = open ?? !nav.classList.contains('nav--open');
  nav.classList.toggle('nav--open', isOpen);
  hamburger.classList.toggle('hamburger--open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
}

/* click on icon */
hamburger.addEventListener('click', () => toggleMenu());

/* click on link closes menu */
nav.addEventListener('click', e => {
  if (e.target.matches('.nav__list a')) toggleMenu(false);
});

/* ESC key closes menu */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
    toggleMenu(false);
    hamburger.focus();
  }
});
