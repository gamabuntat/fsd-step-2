import Dropdown from './Dropdown';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-dropdown').forEach((d) => new Dropdown(d))
);
