import getLastItem from '@scripts/getLastItem.js';
import Tables from '@scripts/Tables.js';
import BEMBlock from '@scripts/BEMBlock.js';

class Calendar extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.dayInMilisecond = 24 * 60 * 60 * 1000;
    this.setListeners();
    this.updateElemsMap([
      'next-month-btn',
      'prev-month-btn',
      'apply-btn',
      'cancle-btn',
      'table-container',
      'error',
      'month-label',
      'year-label'
    ]);
    this.setMods([
      'calendar__day_selected',
      'calendar__day_start-range',
      'calendar__day_end-range',
      'calendar__day-btn_selected',
      'calendar__day-btn_next-month',
      'calendar__day-btn_prev-month',
      'calendar__day-btn_todays'
    ]);
    this.setListeners();
    this.mainTables = new Tables(
      this.root.getElementsByClassName('js-calendar__main-table')
    );
    this.setReadyDateEvent();
    this.setMonthFormater();
    this.errorMessage = this.elemsMap.error.innerText;
    this.elemsMap.error.innerText = '';
    this.template = this.elemsMap.tableContainer.innerHTML;
    this.step = parseInt(getComputedStyle(this.elemsMap.tableContainer).width);
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
    this.defaultHash = 'cal0';
    this.hash = this.root.dataset.hash 
      || (this.root.dataset.hash = this.defaultHash);
    this.initDates = this.getInitDates();
    this.setDataset();
    const now = new Date(this.initDates.date || Date());
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.modifyTodaysBtn(now);
    this.disableBtns(now);
    this.fillTables(this.mainTables.index);
    this.clearTables(this.mainTables.index);
    this.bindListenerOnLastBtn(this.mainTables.index);
    this.insertFillClearTables(this.mainTables.index + 1);
    this.updateMonthDisplayValue();
    this.updateYearDisplayValue();
    this.changeTableContainerHeight();
    this.bindListeners();
    this.setSessStorDate();
    if (!this.initDates.startDate) { return; }
    this.setInitialRange(this.initDates.startDate);
    if (!this.initDates.endDate) { return; }
    this.setInitialRange(this.initDates.endDate);
  }

  setListeners() {
    this.setHandlePrevMonthBtnClick();
    this.setHandleNextMonthBtnClick();
    this.setHandleCancleBtnClick();
    this.setHandleApplyBtnClick();
    this.setHandleLastDayBtnKeydown();
    this.setHandleFirstDayBtnKeydown();
    this.setHandleCancleBtnKeydown();
    this.setHandleNextMonthBtnKeydown();
    this.setHandleTablesContainerClick();
  }

  setReadyDateEvent() {
    this.readyDateEvent = new CustomEvent(
      'ready-date',
      { 
        bubbles: true, 
        detail: 'date range is ready (start and end range data filled)'
      }
    );
  }

  setMonthFormater() {
    this.monthFormater = new Intl.DateTimeFormat('ru', { month: 'long' });
  }

  getInitDates() {
    const data = this.root.dataset;
    const source = data.date || data.startDate 
      ? data 
      : JSON.parse(sessionStorage.getItem(this.hash));
    return this.validateDate({
      date: source?.date || '',
      startDate: source?.startDate,
      endDate: source?.endDate
    });
  }

  validateDate({ date, startDate, endDate }) {
    const validDate = Calendar.checkDateIsInvalid(date) 
      ? Calendar.formatDate(new Date())
      : date;
    const validStartDate = new Date(startDate) - new Date(validDate) >= 0 
      ? startDate 
      : '';
    const validEndDate = new Date(endDate) - new Date(validStartDate) 
      >= this.dayInMilisecond 
      ? endDate 
      : '';
    return {
      startDate: validStartDate,
      endDate: validEndDate,
      date
    };
  }

  setDataset({ date, startDate, endDate } = this.initDates) {
    this.root.dataset.date = date;
    this.root.dataset.startDate = startDate;
    this.root.dataset.endDate = endDate;
  }

  modifyTodaysBtn(now) {
    this.getButton(
      this.mainTables.getCoord(0, this.getPrevMonthNDay(0) + now.getDate())
    )
      .classList.add(this.mods.dayBtnTodays);
  }

  disableBtns(now) {
    [...this.mainTables.genCoordsInOrder(
      [0, 0, 0],
      this.mainTables.getCoord(0, this.getPrevMonthNDay(0) + now.getDate()),
      Tables.isCoordLess,
    )]
      .forEach((coord) => (
        this.getButton(coord).disabled = true
      ));
  }

  setInitialRange(dateStr) {
    const btnDate = new Date(dateStr);
    const index = this.getIndex(btnDate);
    this.insertFillClearTablesNthTimes(index);
    const coord = this.mainTables.getCoord(
      index, 
      this.getPrevMonthNDay(index) + btnDate.getDate()
    );
    const btn = this.getButton(coord);
    this.mainTables.index = index;
    btn.click();
    this.mainTables.index = 0;
  }

  getIndex(rangeDate) {
    return (rangeDate.getFullYear() - this.year) * 12 
      - this.month + rangeDate.getMonth();
  }

  insertFillClearTablesNthTimes(n) {
    if (!n) { return; }
    while (this.mainTables.getSize() != n + 2) {
      this.insertFillClearTables(this.mainTables.getSize());
    }
  }

  insertFillClearTables(index) {
    this.insertTemplate();
    this.fillTables(index);
    this.clearTables(index);
    this.bindListenerOnLastBtn(index);
    this.bindListenerOnFirstBtn(index);
  }

  updateMonthDisplayValue() {
    this.elemsMap.monthLabel.innerText = this.monthFormater
      .format(new Date(this.year, this.month + this.mainTables.index))
      .replace(/^./, (s) => s.toUpperCase());
  }

  updateYearDisplayValue() {
    this.elemsMap.yearLabel.innerText = new Date(
      this.year, this.month + this.mainTables.index
    ).getFullYear();
  }

  bindListeners() {
    this.elemsMap.prevMonthBtn
      .addEventListener('click', this.handlePrevMonthBtnClick);
    this.elemsMap.nextMonthBtn
      .addEventListener('click', this.handleNextMonthBtnClick);
    this.elemsMap.nextMonthBtn
      .addEventListener('keydown', this.handleNextMonthBtnKeydown);
    this.elemsMap.cancleBtn
      .addEventListener('click', this.handleCancleBtnClick);
    this.elemsMap.cancleBtn
      .addEventListener('keydown', this.handleCancleBtnKeydown);
    this.elemsMap.applyBtn
      .addEventListener('click', this.handleApplyBtnClick);
    this.elemsMap.tableContainer
      .addEventListener('click', this.handleTablesContainerClick);
  }

  bindListenerOnLastBtn(index) {
    this.getButton(this.mainTables.getLastCellCoord(index))
      .addEventListener('keydown', this.handleLastDayBtnKeydown);
  }

  bindListenerOnFirstBtn(index) {
    this.getButton([index, 0, 0])
      .addEventListener('keydown', this.handleFirstDayBtnKeydown);
  }

  setHandlePrevMonthBtnClick() {
    this.handlePrevMonthBtnClick = () => {
      if (this.mainTables.index == 0) { return; }
      this.mainTables.decreaseIndex();
      this.changeTableContainerHeight();
      this.changeDisplayedMonth();
      this.updateMonthDisplayValue();
      this.updateYearDisplayValue();
    };
  }

  setHandleNextMonthBtnClick() {
    this.handleNextMonthBtnClick = () => {
      this.mainTables.increaseIndex();
      this.changeTableContainerHeight();
      this.changeDisplayedMonth();
      this.updateMonthDisplayValue();
      this.updateYearDisplayValue();
      if (this.mainTables.index === this.mainTables.getSize() - 1) {
        this.insertFillClearTables(this.mainTables.index + 1);
      }
    };
  }

  setHandleCancleBtnClick() {
    this.handleCancleBtnClick = () => {
      this.clearRange();
      this.clearRangeData();
      this.removeDataIsReady();
    };
  }

  setHandleApplyBtnClick() {
    this.handleApplyBtnClick = () => {
      this.setSessStorDate();
      this.elemsMap.error.innerText = this.errorMessage;
      if (this.isEndRange()) {
        this.root.dispatchEvent(this.readyDateEvent);
        this.elemsMap.error.innerText = '';
      }
    };
  }

  setSessStorDate() {
    sessionStorage.setItem(
      this.hash, 
      JSON.stringify({
        date: this.root.dataset.date,
        startDate: this.root.dataset.startDate,
        endDate: this.root.dataset.endDate
      })
    );
  }

  setHandleLastDayBtnKeydown() {
    this.handleLastDayBtnKeydown = (e) => {
      if (e.code === 'Tab' && !e.shiftKey) {
        e.preventDefault();
        this.elemsMap.cancleBtn.firstElementChild.focus();
      }
    };
  }

  setHandleFirstDayBtnKeydown() {
    this.handleFirstDayBtnKeydown = (e) => {
      if (e.code === 'Tab' && e.shiftKey) {
        e.preventDefault();
        this.elemsMap.nextMonthBtn.focus();
      }
    };
  }

  setHandleCancleBtnKeydown() {
    this.handleCancleBtnKeydown = (e) => {
      if (e.code === 'Tab' && e.shiftKey) {
        e.preventDefault();
        this.getButton(
          this.mainTables.getLastCellCoord(this.mainTables.index)
        ).focus();
      }
    };
  }

  setHandleNextMonthBtnKeydown() {
    this.handleNextMonthBtnKeydown = (e) => {
      if (e.code === 'Tab' && !e.shiftKey && this.mainTables.index !== 0) { 
        e.preventDefault();
        this.getButton([this.mainTables.index, 0, 0]).focus();
      }
    };
  }

  setHandleTablesContainerClick() {
    this.handleTablesContainerClick = (e) => {
      const btn = e.target;
      if (!btn.classList.contains('js-calendar__day-btn')) { return; }
      const isSelected = btn.classList.toggle(this.mods.dayBtnSelected);
      if (isSelected === false) {
        this.clearRange();
        this.clearRangeData();
        this.removeDataIsReady();
        return;
      }
      if (this.isEndRange()) { 
        this.clearRange(); 
        this.clearRangeData();
      }
      this.rangeCounter += 1;
      const btnCoord = this.mainTables.getElemCoord(btn);
      const firstRowBtn = this.getButton([btnCoord[0], btnCoord[1], 0]);
      const lastRowBtn = this.getButton([btnCoord[0], btnCoord[1], 6]);
      this.addCoordInRange(btnCoord);
      const isPrevMonthbtn = btn.classList.contains(this.mods.dayBtnPrevMonth);
      const isNextMonthBtn = btn.classList.contains(this.mods.dayBtnNextMonth);
      const shouldSelectedPrevMonth = firstRowBtn
        .classList.contains(this.mods.dayBtnPrevMonth);
      const shouldSelectedNextMonth = lastRowBtn
        .classList.contains(this.mods.dayBtnNextMonth);
      if (isPrevMonthbtn || shouldSelectedPrevMonth) {
        if (this.mainTables.index > 0) {
          this.addCoordInRange(this.mainTables.getCoordsAgo(btnCoord, 7));
        }
      }
      if (isNextMonthBtn || shouldSelectedNextMonth) {
        this.addCoordInRange(this.mainTables.getCoordsForward(btnCoord, 7));
      }
      this.selectLastRangeBtn();
      this.removeDataIsReady();
      if (this.isEndRange()) {
        this.orderRange();
        this.drawRange(this.range[0]);
        this.fixOrderRange();
        this.modifyRangeCells();
        this.setDataIsReady();
      }
      this.setRangeData();
    };
  }

  drawRange(coord) {
    const nextCoord = this.searchNextRangeCoord(
      this.drawPartOfRange(
        this.mainTables.genCoordsInOrder(
          coord,
          this.searchNextRangeCoord(coord) || getLastItem(this.range),
          (
            this.getButton([coord[0], coord[1], 6])
              .classList.contains(this.mods.dayBtnNextMonth)
              ? ((lastCoord) => (coord) => (
                Tables.isCoordLessOrEqual(coord, lastCoord)
              ))(Tables.getMinCoord(
                this.mainTables.getLastCellCoord(coord[0]),
                this.range[1]
              ))
              : Tables.isCoordLessOrEqual
          ),
        )
      )
    );
    if (nextCoord) { 
      this.drawRange(
        Tables.isCoordEqual(nextCoord, getLastItem(this.range)) 
          ? [getLastItem(this.range)[0], 0, 0] 
          : nextCoord
      ); 
    }
  }

  searchNextRangeCoord(coord) {
    return this.range.find((c) => Tables.isCoordMore(c, coord));
  }

  drawPartOfRange(generator) {
    const coords = [...generator];
    coords.forEach((coord) => (
      this.mainTables.getCell(coord).classList.add(this.mods.daySelected)
    ));
    return getLastItem(coords);
  }

  fixOrderRange() {
    this.startRange.sort(Tables.compareCoord);
    this.endRange.sort(Tables.compareCoord);
    const buffer = this.startRange;
    if (Tables.isCoordLess(this.startRange[0], this.endRange[0])) { return; }
    this.startRange = this.endRange;
    this.endRange = buffer;
  }

  modifyRangeCells() {
    this.startRange.forEach((coord) => {
      const cell = this.mainTables.getCell(coord);
      cell.classList.remove(this.mods.daySelected);
      cell.classList.add(this.mods.dayStartRange);
    });
    this.endRange.forEach((coord) => {
      const cell = this.mainTables.getCell(coord);
      cell.classList.remove(this.mods.daySelected);
      cell.classList.add(this.mods.dayEndRange);
    });
  }

  clearRange() {
    if (this.rangeCounter === 2) {
      [...this.mainTables.genCoordsInOrder(
        this.range[0], 
        getLastItem(this.range),
        Tables.isCoordLessOrEqual,
      )]
        .forEach((coord) => (
          this.mainTables.getCell(coord).classList.remove(this.mods.daySelected)
        ));
    }
    [...this.startRange, ...this.endRange].forEach((coord) => {
      const cell = this.mainTables.getCell(coord);
      cell.classList.remove(this.mods.dayStartRange);
      cell.classList.remove(this.mods.dayEndRange);
      this.getButton(coord).classList.remove(this.mods.dayBtnSelected);
    });

    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
  }

  setRangeData() {
    this.root.dataset.startDate = (
      Calendar.formatDate(this.getDateFromCoord(
        this.startRange.find(this.isPresentDayBtn.bind(this))
      ))
    );
    if (this.endRange.length != 0) {
      this.root.dataset.endDate = (
        Calendar.formatDate(this.getDateFromCoord(
          this.endRange.find(this.isPresentDayBtn.bind(this))
        ))
      );
    }
  }

  clearRangeData() {
    this.root.dataset.startDate = '';
    this.root.dataset.endDate = '';
  }

  setDataIsReady() {
    this.root.setAttribute('data-date-is-ready', '');
  }

  removeDataIsReady() {
    this.root.removeAttribute('data-date-is-ready');
  }

  isPresentDayBtn(coord) {
    const button = this.getButton(coord);
    const isNext = button.classList.contains(this.mods.dayBtnNextMonth);
    const isPrev = button.classList.contains(this.mods.dayBtnPrevMonth);
    return !(isNext || isPrev);
  }

  addCoordInRange(coord) {
    this.getLastRange().push(coord);
  }

  selectLastRangeBtn() {
    this.getButton(getLastItem(this.getLastRange()))
      .classList.add(this.mods.dayBtnSelected);
  }

  getLastRange() {
    return this.isStartRange() ? this.startRange : this.endRange;
  }

  isStartRange() {
    return this.rangeCounter === 1;
  }

  isEndRange() {
    return this.rangeCounter === 2;
  }

  orderRange() {
    this.range = [...this.startRange, ...this.endRange]
      .sort(Tables.compareCoord);
  }

  changeTableContainerHeight() {
    const activeTableHeight = this.mainTables.tables[this.mainTables.index]
      .getBoundingClientRect().height;
    if (activeTableHeight === 0) { return; }
    this.elemsMap.tableContainer.style.height = `${activeTableHeight}px`;
  }

  changeDisplayedMonth() {
    this.mainTables.getTables()[0].style.marginLeft = `${
      -this.mainTables.index * this.step
    }px`;
  }

  fillTables(index) {
    const gen = this.mainTables.genCoordsInOrder(
      [index, 0, 0], 
      [index, this.mainTables.getLastRowIndex(index), 6]
    );
    Calendar.getPrevMonthDay(
      Calendar.getMonthLastDay(this.year, this.month + index - 1),
      this.getPrevMonthNDay(index)
    ).forEach((day) => {
      const btn = this.getButton(gen.next().value);
      btn.innerText = day;
      btn.classList.add(this.mods.dayBtnPrevMonth);
    });
    Calendar.getPresentDay(this.getPresentNDay(index)).forEach((day) => (
      this.getButton(gen.next().value).innerText = day
    ));
    Calendar.getNextMonthDay(this.getNextMonthNDay(index)).forEach((day) => {
      const btn = this.getButton(gen.next().value);
      btn.innerText = day;
      btn.classList.add(this.mods.dayBtnNextMonth);
    });
  }

  clearTables(index) {
    const nFilledRows = Math.ceil(
      (this.getPrevMonthNDay(index) + this.getPresentNDay(index)) / 7
    );
    for (let row = 5; row >= nFilledRows; row--) {
      this.mainTables.getTables()[index].rows[row].remove();
    }
  }

  insertTemplate() {
    this.elemsMap.tableContainer.insertAdjacentHTML('beforeend', this.template);
  }

  getNextMonthNDay(index) {
    return 7 - Calendar.getWeekDay(
      this.year, 
      this.month + index,
      Calendar.getMonthLastDay(this.year, this.month + index)
    );
  }

  getPresentNDay(index) {
    return Calendar.getMonthLastDay(this.year, this.month + index);
  }

  getPrevMonthNDay(index) {
    return Calendar.getWeekDay(this.year, this.month + index) - 1;
  }

  getButton(coord) {
    return this.mainTables.getCell(coord).firstElementChild;
  }

  getDateFromCoord(coord) {
    return new Date(
      this.year,
      this.month + coord[0], 
      coord[1] * 7 + coord[2] + 1 - this.getPrevMonthNDay(coord[0])
    );
  }

  static checkDateIsInvalid(dateStr) {
    return new Date(dateStr).toString() === 'Invalid Date';
  }

  static getNextMonthDay(nextMonthNDay) {
    return Array(nextMonthNDay).fill(1).map((d, idx) => d + idx);
  }

  static getPresentDay(presentMonthNDay) {
    return [...Array(presentMonthNDay).keys()].map((d) => d + 1);
  }

  static getPrevMonthDay(prevLastDate, prevMonthNDay) {
    return Array(prevMonthNDay)
      .fill(prevLastDate)
      .map((d, idx) => d - idx)
      .reverse();
  }

  static getWeekDay(year, month, day = 1) {
    return new Date(year, month, day).getDay() || 7;
  }

  static getMonthLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  static formatDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}

export default Calendar;

