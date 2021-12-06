import Like from './Like.js';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-like').forEach((l) => new Like(l))
);
