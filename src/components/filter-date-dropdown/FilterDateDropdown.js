import BEMBlock from '@scripts/BEMBlock.js';

class FilterDateDropdown extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['calendar-wrapper', 'btn', 'sign']);
    this.setMods([
      'filter-date-dropdown__btn_pressed',
      'filter-date-dropdown__calendar-wrapper_hidden',
    ]);
    this.calendar = this.elemsMap.calendarWrapper.firstElementChild;
    this.dateFormater = new Intl.DateTimeFormat('ru', {
      day: 'numeric',
      month: 'short',
    });
    this.observer = new MutationObserver(this.handleCalAttrsChanges.bind(this));
    this.observer.observe(this.calendar, { attributes: true });
    this.setListeners();
    this.closeTrigger = true;
    this.bindListeners();
    this.handleCalAttrsChanges();
  }

  handleCalAttrsChanges() {
    if (this.calendar.hasAttribute('data-date-is-ready')) {
      const data = this.calendar.dataset;
      this.elemsMap.sign.textContent = `${this.formateDate(
        new Date(data.startDate)
      )} - ${this.formateDate(new Date(data.endDate))}`;
    }
  }

  setListeners() {
    this.setHandleWindowClick();
    this.setHandleRootClick();
    this.setHandleBtnClick();
  }

  bindListeners() {
    window.addEventListener('click', this.handleWindowClick);
    this.root.addEventListener('click', this.handleRootClick);
    this.elemsMap.btn.addEventListener('click', this.handleBtnClick);
    this.elemsMap.calendarWrapper.addEventListener(
      'ready-date',
      this.handleBtnClick
    );
  }

  setHandleWindowClick() {
    this.handleWindowClick = () => {
      if (this.closeTrigger) {
        this.elemsMap.btn.classList.remove(this.mods.btnPressed);
        this.elemsMap.calendarWrapper.classList.add(
          this.mods.calendarWrapperHidden
        );
      }
      this.closeTrigger = true;
    };
  }

  setHandleRootClick() {
    this.handleRootClick = () => {
      this.closeTrigger = false;
    };
  }

  setHandleBtnClick() {
    this.handleBtnClick = () => {
      this.elemsMap.btn.classList.toggle(this.mods.btnPressed);
      this.elemsMap.calendarWrapper.classList.toggle(
        this.mods.calendarWrapperHidden
      );
    };
  }

  formateDate(date) {
    return this.dateFormater.format(date).replace(/\.$/, '');
  }
}

export default FilterDateDropdown;
