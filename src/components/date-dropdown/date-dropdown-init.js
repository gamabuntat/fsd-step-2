import DateDropdown from './DateDropdown.js';

window.addEventListener('load', () => {
  document
    .querySelectorAll('.js-date-dropdown')
    .forEach((dd) => new DateDropdown(dd));
});
