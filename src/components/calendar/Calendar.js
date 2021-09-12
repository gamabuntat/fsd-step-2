import getLastItem from '@scripts/getLastItem.js';
import Tables from '@scripts/Tables.js';
import BEMBlock from '@scripts/BEMBlock.js';

class Calendar {
  constructor(root) {
    const block = new BEMBlock(root);
    block.updateElemsMap(['year', 'day-btn', 'next-month-btn']);
    console.log(block.elemsMap);
    block.updateElemsMap(['prev-month-btn']);
    console.log(block.elemsMap);
    // super(root.getElementsByClassName('js-calendar__main-table'));
    this.mainTables = new Tables(
      root.getElementsByClassName('js-calendar__main-table')
    );
    this.root = root;
    this.monthFormater = new Intl.DateTimeFormat('ru', { month: 'long' });
    this.readyDateEvent = new CustomEvent(
      'ready-date',
      { 
        bubbles: true, 
        detail: 'date range is ready (start and end range data filled)'
      }
    );
    this.nextMonthBtn = this.root.querySelector('.js-calendar__next-month-btn');
    this.cancleBtn = this.root.querySelector('.js-calendar__cancle-btn');
    this.tableContainer = this.root
      .querySelector('.js-calendar__table-container');
    this.error = this.root.querySelector('.js-calendar__error');
    this.errorMessage = this.error.innerText;
    this.error.innerText = '';
    this.template = this.tableContainer.innerHTML;
    this.monthDisplay = this.root.querySelector('.js-calendar__month');
    this.yearDisplay = this.root.querySelector('.js-calendar__year');
    this.step = parseInt(getComputedStyle(this.tableContainer).width);
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
    this.selectedMod = 'calendar__day_selected';
    this.startRangeMod = 'calendar__day_start-range';
    this.endRangeMod = 'calendar__day_end-range';
    this.selectedBtnMod = 'calendar__day-btn_selected';
    this.nextMonthBtnMod = 'calendar__day-btn_next-month';
    this.prevMonthBtnMod = 'calendar__day-btn_prev-month';
    this.todayBtnMod = 'calendar__day-btn_todays';
    this.hash = this.root.dataset.hash 
      || (this.root.dataset.hash = 'cal0'), 'cal0';
    this.initDates = this.getInitDates();
    this.root.dataset.date = this.initDates.date || '';
    const now = new Date(this.initDates.date || Date());
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.init(now);
    this.setSessStorDate();
  }

  getInitDates() {
    const data = this.root.dataset;
    const source = data.date || data.startDate 
      ? data 
      : JSON.parse(sessionStorage.getItem(this.hash));
    return {
      date: source?.date,
      startDate: source?.startDate,
      endDate: source?.endDate
    };
  }

  init(now) {
    this.modifyTodaysBtn(now);
    this.disableBtsn(now);
    this.fillTables(this.mainTables.index);
    this.clearTables(this.mainTables.index);
    this.bindListenerOnLastBtn(this.mainTables.index);
    this.insertFillClearTables(this.mainTables.index + 1);
    this.updateMonthDisplayValue();
    this.updateYearDisplayValue();
    this.bindListeners();
    if (Calendar.checkDateIsValid(this.initDates.startDate)) { return; }
    this.setInitialRange(this.initDates.startDate);
    if (Calendar.checkDateIsValid(this.initDates.endDate)) { return; }
    this.setInitialRange(this.initDates.endDate);
  }

  modifyTodaysBtn(now) {
    this.getButton(
      this.mainTables.getCoord(0, this.getPrevMonthNDay(0) + now.getDate())
    )
      .classList.add(this.todayBtnMod);
  }

  disableBtsn(now) {
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
    this.monthDisplay.innerText = this.monthFormater
      .format(new Date(this.year, this.month + this.mainTables.index))
      .replace(/^./, (s) => s.toUpperCase());
  }

  updateYearDisplayValue() {
    this.yearDisplay.innerText = new Date(
      this.year, this.month + this.mainTables.index
    ).getFullYear();
  }

  bindListeners() {
    this.root.querySelector('.js-calendar__prev-month-btn')
      .addEventListener('click', this.handlePrevMonthBtnClick.bind(this));
    this.nextMonthBtn
      .addEventListener('click', this.handleNextMonthBtnClick.bind(this));
    this.nextMonthBtn
      .addEventListener('keydown', this.handleNextMonthBtnKeydown.bind(this));
    this.cancleBtn
      .addEventListener('click', this.handleCancleBtnClick.bind(this));
    this.cancleBtn
      .addEventListener('keydown', this.handleCancleBtnKeydown.bind(this));
    this.root.querySelector('.js-calendar__apply-btn')
      .addEventListener('click', this.handleApplyBtnClick.bind(this));
    this.tableContainer
      .addEventListener('click', this.handleTablesContainerClick.bind(this));
  }

  bindListenerOnLastBtn(index) {
    this.getButton(this.mainTables.getLastCellCoord(index))
      .addEventListener('keydown', this.handleLastDayBtnKeydown.bind(this));
  }

  bindListenerOnFirstBtn(index) {
    this.getButton([index, 0, 0])
      .addEventListener('keydown', this.handleFirstDayBtnKeydown.bind(this));
  }

  handlePrevMonthBtnClick() {
    if (this.mainTables.index == 0) { return; }
    this.mainTables.decreaseIndex();
    this.changeDisplayedMonth();
    this.updateMonthDisplayValue();
    this.updateYearDisplayValue();
  }

  handleNextMonthBtnClick() {
    this.mainTables.increaseIndex();
    this.changeDisplayedMonth();
    this.updateMonthDisplayValue();
    this.updateYearDisplayValue();
    if (this.mainTables.index === this.mainTables.getSize() - 1) {
      this.insertFillClearTables(this.mainTables.index + 1);
    }
  }

  handleCancleBtnClick() {
    this.clearRange();
    this.clearRangeData();
  }

  handleApplyBtnClick() {
    this.setSessStorDate();
    this.error.innerText = this.errorMessage;
    if (this.isEndRange()) {
      this.root.dispatchEvent(this.readyDateEvent);
      this.error.innerText = '';
    }
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

  handleLastDayBtnKeydown(e) {
    if (e.code === 'Tab' && !e.shiftKey) {
      e.preventDefault();
      this.cancleBtn.firstElementChild.focus();
    }
  }

  handleFirstDayBtnKeydown(e) {
    if (e.code === 'Tab' && e.shiftKey) {
      e.preventDefault();
      this.nextMonthBtn.focus();
    }
  }

  handleCancleBtnKeydown(e) {
    if (e.code === 'Tab' && e.shiftKey) {
      e.preventDefault();
      this.getButton(
        this.mainTables.getLastCellCoord(this.mainTables.index)
      ).focus();
    }
  }

  handleNextMonthBtnKeydown(e) {
    if (e.code === 'Tab' && !e.shiftKey && this.mainTables.index !== 0) { 
      e.preventDefault();
      this.getButton([this.mainTables.index, 0, 0]).focus();
    }
  }

  handleTablesContainerClick(e) {
    const btn = e.target;
    if (!btn.classList.contains('js-calendar__day-btn')) { return; }
    const isSelected = btn.classList.toggle(this.selectedBtnMod);
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
    const isPrevMonthbtn = btn.classList.contains(this.prevMonthBtnMod);
    const isNextMonthBtn = btn.classList.contains(this.nextMonthBtnMod);
    const shouldSelectedPrevMonth = firstRowBtn
      .classList.contains(this.prevMonthBtnMod);
    const shouldSelectedNextMonth = lastRowBtn
      .classList.contains(this.nextMonthBtnMod);
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
  }

  drawRange(coord) {
    const nextCoord = this.searchNextRangeCoord(
      this.drawPartOfRange(
        this.mainTables.genCoordsInOrder(
          coord,
          this.searchNextRangeCoord(coord) || getLastItem(this.range),
          (
            this.getButton([coord[0], coord[1], 6])
              .classList.contains(this.nextMonthBtnMod)
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
      this.mainTables.getCell(coord).classList.add(this.selectedMod)
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
      cell.classList.remove(this.selectedMod);
      cell.classList.add(this.startRangeMod);
    });
    this.endRange.forEach((coord) => {
      const cell = this.mainTables.getCell(coord);
      cell.classList.remove(this.selectedMod);
      cell.classList.add(this.endRangeMod);
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
          this.mainTables.getCell(coord).classList.remove(this.selectedMod)
        ));
    }
    [...this.startRange, ...this.endRange].forEach((coord) => {
      const cell = this.mainTables.getCell(coord);
      cell.classList.remove(this.startRangeMod);
      cell.classList.remove(this.endRangeMod);
      this.getButton(coord).classList.remove(this.selectedBtnMod);
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
    const isNext = button.classList.contains(this.nextMonthBtnMod);
    const isPrev = button.classList.contains(this.prevMonthBtnMod);
    return !(isNext || isPrev);
  }

  addCoordInRange(coord) {
    this.getLastRange().push(coord);
  }

  selectLastRangeBtn() {
    this.getButton(getLastItem(this.getLastRange()))
      .classList.add(this.selectedBtnMod);
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
      btn.classList.add(this.prevMonthBtnMod);
    });
    Calendar.getPresentDay(this.getPresentNDay(index)).forEach((day) => (
      this.getButton(gen.next().value).innerText = day
    ));
    Calendar.getNextMonthDay(this.getNextMonthNDay(index)).forEach((day) => {
      const btn = this.getButton(gen.next().value);
      btn.innerText = day;
      btn.classList.add(this.nextMonthBtnMod);
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
    this.tableContainer.insertAdjacentHTML('beforeend', this.template);
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

  static getBEMBlockName() {
    return 'js-calendar';
  }

  static getBEMClass() {
    return `.${Calendar.getBEMBlockName()}`;
  }

  static checkDateIsValid(dateStr) {
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
