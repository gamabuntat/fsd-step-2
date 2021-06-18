class DateDropdown {
  constructor(root) {
    this.dateFormater = new Intl.DateTimeFormat('ru');
    this.calWrapper = root.querySelector('.js-date-dropdown__cal-wrapper');
    this.cal = this.calWrapper.firstElementChild;
    this.startBtn = root.querySelector('.js-date-dropdown__start-btn');
    this.endBtn = root.querySelector('.js-date-dropdown__end-btn');
    this.startSignature = this.startBtn
      .querySelector('.js-date-dropdown__date-signature');
    this.endSignature = this.endBtn
      .querySelector('.js-date-dropdown__date-signature');
    this.mask = this.startSignature.innerText;
    this.observer = new MutationObserver(
      this.handleCalAttrsChanges.bind(this)
    );
    this.observer.observe(this.cal, {attributes: true});
    this.bindListeners();
    this.handleBtnClick();
    this.handleCalStartAttrsChanges();
    this.handleCalEndAttrsChanges();
  }

  handleCalAttrsChanges() {
    this.handleCalStartAttrsChanges();
    this.handleCalEndAttrsChanges();
  }

  handleCalStartAttrsChanges() {
    this.updateStartSignature(new Date(this.getStartDate()));
  }

  handleCalEndAttrsChanges() {
    this.updateEndSignature(new Date(this.getEndDate()));
  }

  updateStartSignature(date) {
    this.checkDate(date) 
      ? this.changeStartDateSignatyre(this.mask) 
      : this.changeStartDateSignatyre(this.formateDate(date));
  }

  updateEndSignature(date) {
    this.checkDate(date) 
      ? this.changeEndDateSignatyre(this.mask) 
      : this.changeEndDateSignatyre(this.formateDate(date));
  }

  getStartDate() {
    return this.cal.dataset.startDate;
  }

  getEndDate() {
    return this.cal.dataset.endDate;
  }

  checkDate(date) {
    return date.toString() === 'Invalid Date';
  }

  formateDate(date) {
    return this.dateFormater.format(date);
  }

  changeStartDateSignatyre(dateStr) {
    this.startSignature.innerText = dateStr;
  }

  changeEndDateSignatyre(dateStr) {
    this.endSignature.innerText = dateStr;
  }

  bindListeners() {
    this.startBtn.addEventListener('click', this.handleBtnClick.bind(this));
    this.endBtn.addEventListener('click', this.handleBtnClick.bind(this));
  }

  handleBtnClick() {
    this.calWrapper.classList.toggle('date-dropdown__cal-wrapper_hidden');
  }
}

document.querySelectorAll('.js-date-dropdown')
  .forEach((dd) => new DateDropdown(dd));

