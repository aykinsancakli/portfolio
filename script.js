function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  menu.classList.toggle('open');
  icon.classList.toggle('open');
}

const yearEl = document.querySelector('.year');
yearEl.textContent = new Date().getFullYear();

const waveEl = document.querySelector('.wave');

setInterval(() => {
  waveEl.classList.add('waving');
  setTimeout(() => {
    waveEl.classList.remove('waving');
  }, 600);
}, 3000);
