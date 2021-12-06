import FilterDateDropdown from './FilterDateDropdown.js';

window.addEventListener('load', () => {
  document
    .querySelectorAll('.js-filter-date-dropdown')
    .forEach((fdd) => new FilterDateDropdown(fdd));
});
