import BEMBlock from '@scripts/BEMBlock.js';

class DateDropdown extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
    this.setListeners();
    this.bindListeners();
    this.handleCalAttrsChanges();
  }

  init() {
    this.updateElemsMap([
      'cal-wrapper',
      'start-btn',
      'end-btn',
    ]);
    this.setMods(['date-dropdown__cal-wrapper_hidden']);
    this.dateFormater = new Intl.DateTimeFormat('ru');
    this.calendar = this.elemsMap.calWrapper.firstElementChild;
    this.startSignature = this.elemsMap.startBtn
      .querySelector('.js-date-dropdown__date-signature');
    this.endSignature = this.elemsMap.endBtn
      .querySelector('.js-date-dropdown__date-signature');
    this.startMask = this.startSignature.innerText;
    this.endMask = this.endSignature.innerText;
    this.observer = new MutationObserver(
      this.handleCalAttrsChanges.bind(this)
    );
    this.observer.observe(this.calendar, {attributes: true});
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
    this.changeStartDateSignatyre(
      this.checkDate(date) 
        ? this.formateDate(date)
        : this.startMask
    );
  }

  updateEndSignature(date) {
    this.changeEndDateSignatyre(
      this.checkDate(date) 
        ? this.formateDate(date)
        : this.endMask
    );
  }

  getStartDate() {
    return this.calendar.dataset.startDate;
  }

  getEndDate() {
    return this.calendar.dataset.endDate;
  }

  checkDate(date) {
    return date.toString() !== 'Invalid Date';
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

  setListeners() {
    this.setHandleWindowClick();
    this.setHandleRootClick();
    this.setHandleBtnClick();
  }

  bindListeners() {
    window.addEventListener('click', this.handleWindowClick);
    this.root.addEventListener('click', this.handleRootClick);
    this.elemsMap.startBtn.addEventListener('click', this.handleBtnClick);
    this.elemsMap.endBtn.addEventListener('click', this.handleBtnClick);
    this.elemsMap.calWrapper
      .addEventListener('ready-date', this.handleBtnClick);
  }

  setHandleWindowClick() {
    this.handleWindowClick = () => {
      this.elemsMap.calWrapper.classList.add(this.mods.calWrapperHidden);
    };
  }

  setHandleRootClick() {
    this.handleRootClick = (e) => {
      e.stopPropagation();
    };
  }

  setHandleBtnClick() {
    this.handleBtnClick = () => {
      this.elemsMap.calWrapper.classList.toggle(this.mods.calWrapperHidden);
    };
  }
}

export default DateDropdown;

