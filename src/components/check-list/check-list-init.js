import CheckList from './CheckList.js';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-check-list').forEach((cl) => new CheckList(cl))
);
