import DateDropdown from './DateDropdown.js';

window.addEventListener('load', () => {
  document.querySelectorAll(DateDropdown.getBEMClass())
    .forEach((dd) => new DateDropdown(dd));
});

