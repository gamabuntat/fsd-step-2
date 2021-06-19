class FilterDateDropdown {
  constructor(root) {
    this.btn = root.querySelector('.filter-date-dropdown__btn');
    this.calWrapper = root.querySelector('.filter-date-dropdown__cal-wrapper');
    this.cal = this.calWrapper.firstElementChild;
    this.bindListeners();
  }

  bindListeners() {
    this.btn.addEventListener('click', this.handleBtnClick.bind(this));
  }

  handleBtnClick() {
    this.btn.classList.toggle('filter-date-dropdown__btn_pressed');
    this.calWrapper
      .classList.toggle('filter-date-dropdown__cal-wrapper_hidden');
  }
}

document.querySelectorAll('.js-filter-date-dropdown')
  .forEach((fdd) => new FilterDateDropdown(fdd));

