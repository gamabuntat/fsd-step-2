import Header from './Header';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-header').forEach((h) => new Header(h))
);
