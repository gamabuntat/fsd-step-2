import {Tables} from './Tables.js';

class Cal extends Tables {
  constructor(root) {
    super(root.getElementsByClassName('js-cal__main-table'));
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
    this.selectedMod = 'cal__day_selected';
    this.startRangeMod = 'cal__day_start-range';
    this.endRangeMod = 'cal__day_end-range';
    this.selectedBtnMod = 'cal__day-btn_selected';
    this.nextMonthBtnMod = 'cal__day-btn_next-month';
    this.prevMonthBtnMod = 'cal__day-btn_prev-month';
    const now = new Date(root.dataset.date || Date());
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.init(now, root);
  }

  init(now, root) {
    this.modifyTodaysBtn(now);
    this.disableBtsn(now);
    this.fillTable(this.index);
    this.clearTable(this.index);
    this.insertFillClearTable(this.index + 1);
    this.bindListeners(root);
  }

  modifyTodaysBtn(now) {
    this.getButton(
      this.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate())
    )
      .classList.add('cal__day-btn_todays');
  }

  disableBtsn(now) {
    [...this.genCoordsInOrder(
      [0, 0, 0],
      this.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate()),
      Tables.isCoordLess,
    )]
      .forEach((coord) => (
        this.getButton(coord).disabled = true
      ));
  }

  insertFillClearTable(index) {
    this.insertTemplate();
    this.fillTable(index);
    this.clearTable(index);
  }

  bindListeners(root) {
    root.querySelector('.js-cal__prev-month-btn')
      .addEventListener('click', this.handlePrevMonthBtnClick.bind(this));
    root.querySelector('.js-cal__next-month-btn')
      .addEventListener('click', this.handleNextMonthBtnClick.bind(this));
    this.tableContainer
      .addEventListener('click', this.handleTableContainerClick.bind(this));
  }

  handlePrevMonthBtnClick() {
    if (this.index == 0) { return; }
    this.index -= 1;
    this.changeDisplayedMonth();
  }

  handleNextMonthBtnClick() {
    this.index += 1;
    this.changeDisplayedMonth();
    if (this.index === this.tables.length - 1) {
      this.insertFillClearTable(this.index + 1);
    }
  }

  handleTableContainerClick(e) {
    const btn = e.target;
    if (!btn.classList.contains('cal__day-btn')) { return; }
    const isSelected = btn.classList.toggle(this.selectedBtnMod);
    if (isSelected === false) {
      this.clearRange();
      return;
    }
    if (this.isEndRange()) { this.clearRange(); }
    this.rangeCounter += 1;
    const btnCoord = this.getElemCoord(btn);
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
      this.addCoordInRange(this.getCoordsAgo(btnCoord, 7));
    }
    if (isNextMonthBtn || shouldSelectedNextMonth) {
      this.addCoordInRange(this.getCoordsForward(btnCoord, 7));
    }
    this.selectLastRangeBtn();
    if (this.isEndRange()) {
      this.orderRange();
      this.drawRange(this.range[0]);
      this.fixOrderRange();
      this.modifyRangeCells();
    }
  }

  drawRange(coord) {
    const nextCoord = this.searchNextRangeCoord(
      this.drawPartOfRange(
        this.genCoordsInOrder(
          coord,
          this.searchNextRangeCoord(coord) || Tables.getLastItem(this.range),
          (
            this.getButton([coord[0], coord[1], 6])
              .classList.contains(this.nextMonthBtnMod)
              ? ((lastCoord) => (coord) => (
                Tables.isCoordLessOrEqual(coord, lastCoord)
              ))(Tables.getMinCoord(
                this.getLastCellCoord(coord[0]),
                this.range[1]
              ))
              : Tables.isCoordLessOrEqual
          ),
        )
      )
    );
    if (nextCoord) { 
      this.drawRange(
        Tables.isCoordEqual(nextCoord, Tables.getLastItem(this.range)) 
          ? [Tables.getLastItem(this.range)[0], 0, 0] 
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
      this.getCell(coord).classList.add(this.selectedMod)
    ));
    return Tables.getLastItem(coords);
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
      const cell = this.getCell(coord);
      cell.classList.remove(this.selectedMod);
      cell.classList.add(this.startRangeMod);
    });
    this.endRange.forEach((coord) => {
      const cell = this.getCell(coord);
      cell.classList.remove(this.selectedMod);
      cell.classList.add(this.endRangeMod);
    });
  }

  clearRange() {
    if (this.range.length !== 0) {
      this.range.forEach((coord) => {
        const cell = this.getCell(coord);
        cell.classList.remove(this.startRangeMod);
        cell.classList.remove(this.endRangeMod);
        this.getButton(coord).classList.remove(this.selectedBtnMod);
      });
      [...this.genCoordsInOrder(
        this.range[0], 
        Tables.getLastItem(this.range),
        Tables.isCoordLessOrEqual,
      )]
        .forEach((coord) => (
          this.getCell(coord).classList.remove(this.selectedMod)
        ));
    }
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
  }

  addCoordInRange(coord) {
    this.getLastRange().push(coord);
  }

  selectLastRangeBtn() {
    this.getButton(Tables.getLastItem(this.getLastRange()))
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
    this.tables[0].style.marginLeft = `${-this.index * this.step}px`;
  }

  fillTable(index) {
    const gen = this.genCoordsInOrder(
      [index, 0, 0], 
      [index, this.getLastRowIndex(index), 6]
    );
    Cal.getPrevMonthDay(
      Cal.getMonthLastDay(this.year, this.month + index - 1),
      this.getPrevMonthNDay(index)
    ).forEach((day) => {
      const btn = this.getButton(gen.next().value);
      btn.innerText = day;
      btn.classList.add(this.prevMonthBtnMod);
    });
    Cal.getPresentDay(this.getPresentNDay(index)).forEach((day) => (
      this.getButton(gen.next().value).innerText = day
    ));
    Cal.getNextMonthDay(this.getNextMonthNDay(index)).forEach((day) => {
      const btn = this.getButton(gen.next().value);
      btn.innerText = day;
      btn.classList.add(this.nextMonthBtnMod);
    });
  }

  clearTable(index) {
    const nFilledRows = Math.ceil(
      (this.getPrevMonthNDay(index) + this.getPresentNDay(index)) / 7
    );
    for (let row = 5; row >= nFilledRows; row--) {
      this.tables[index].rows[row].remove();
    }
  }

  insertTemplate() {
    this.tableContainer.insertAdjacentHTML('beforeend', this.template);
  }

  getNextMonthNDay(index) {
    return 7 - Cal.getWeekDay(
      this.year, 
      this.month + index,
      Cal.getMonthLastDay(this.year, this.month + index)
    );
  }

  getPresentNDay(index) {
    return Cal.getMonthLastDay(this.year, this.month + index);
  }

  getPrevMonthNDay(index) {
    return Cal.getWeekDay(this.year, this.month + index) - 1;
  }

  getButton(coord) {
    return this.getCell(coord).firstElementChild;
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
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

