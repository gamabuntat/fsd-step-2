import Like from './Like';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-like').forEach((l) => new Like(l))
);
