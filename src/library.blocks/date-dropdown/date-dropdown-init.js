import DateDropdown from './DateDropdown.js';

const dateDropdownInit = () => (
  document.querySelectorAll(DateDropdown.getBEMClass())
    .forEach((dd) => new DateDropdown(dd))
);

export default dateDropdownInit;

