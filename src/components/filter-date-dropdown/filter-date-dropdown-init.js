import FilterDateDropdown from './FilterDateDropdown';

window.addEventListener('load', () => {
  document
    .querySelectorAll('.js-filter-date-dropdown')
    .forEach((fdd) => new FilterDateDropdown(fdd));
});
