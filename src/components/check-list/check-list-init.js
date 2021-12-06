import CheckList from './CheckList';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-check-list').forEach((cl) => new CheckList(cl))
);
