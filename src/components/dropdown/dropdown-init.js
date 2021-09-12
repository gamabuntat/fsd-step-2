import Dropdown from './Dropdown.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-dropdown').forEach((d) => new Dropdown(d))
));

