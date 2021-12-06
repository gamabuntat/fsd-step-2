import DateDropdown from './DateDropdown';

window.addEventListener('load', () => {
  document
    .querySelectorAll('.js-date-dropdown')
    .forEach((dd) => new DateDropdown(dd));
});
