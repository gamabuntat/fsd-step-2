import Header from './Header.js';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-header').forEach((h) => new Header(h))
);
