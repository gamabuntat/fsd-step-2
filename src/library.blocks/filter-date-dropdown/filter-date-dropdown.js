class FilterDateDropdown {
  constructor(root) {
    this.calWrapper = root.querySelector('.filter-date-dropdown__cal-wrapper');
    this.cal = this.calWrapper.firstElementChild;
    this.btn = root.querySelector('.filter-date-dropdown__btn');
    this.sign = root.querySelector('.filter-date-dropdown__sign');
    this.dateFormater = new Intl.DateTimeFormat(
      'ru', 
      {day: 'numeric', month: 'short'}
    );
    this.observer = new MutationObserver(this.handleCalAttrsChanges.bind(this));
    this.observer.observe(this.cal, {attributes: true});
    this.bindListeners();
  }

  handleCalAttrsChanges() {
    if (this.cal.hasAttribute('data-date-is-ready')) {
      const data = this.cal.dataset;
      this.sign.innerText = `${this.formateDate(new Date(data.startDate))} - ${
        this.formateDate(new Date(data.endDate))
      }`;
    }
  }

  bindListeners() {
    const bindedHandleBtnClick = this.handleBtnClick.bind(this);
    this.btn.addEventListener('click', bindedHandleBtnClick);
    this.calWrapper.addEventListener('ready-date', bindedHandleBtnClick);
  }

  handleBtnClick() {
    this.btn.classList.toggle('filter-date-dropdown__btn_pressed');
    this.calWrapper
      .classList.toggle('filter-date-dropdown__cal-wrapper_hidden');
  }

  formateDate(date) {
    return this.dateFormater.format(date).slice(0, -1);
  }
}

document.querySelectorAll('.js-filter-date-dropdown')
  .forEach((fdd) => new FilterDateDropdown(fdd));

