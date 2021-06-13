class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.tables = root.getElementsByClassName('js-cal__main-table');
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
    this.selectedBtnMod = 'cal__day-btn_selected';
    this.nextMonthBtnMod = 'cal__day-btn_next-month';
    this.prevMonthBtnMod = 'cal__day-btn_prev-month';
    this.selectedMod = 'cal__day_selected';
    const now = new Date(root.dataset.date);
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
      Cal.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate())
    )
      .classList.add('cal__day-btn_todays');
  }

  disableBtsn(now) {
    [...this.genCoordsInOrder(
      [0, 0, 0],
      Cal.isCoordLess,
      Cal.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate())
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
    this.changeFirstTableMargin();
  }

  handleNextMonthBtnClick() {
    this.index += 1;
    this.changeFirstTableMargin();
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
    if (this.rangeCounter === 2) { this.clearRange(); }
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
      this.drawRange();
    }
  }

  drawRange() {
    if (this.range[0][1] === this.getLastRowIndex(this.range[0][0])) {
      this.drawPartOfRange(
        this.getNextCoord(this.range[0]),
        Cal.getMinCoord(
          this.range[1], 
          this.getLastCellCoord(this.range[0][0])
        )
      );
    }
  }

  drawPartOfRange(start, end) {
    [...this.genCoordsInOrder(start, Cal.isCoordLessOrEqual, end)]
      .forEach((coord) => (
        this.getCell(coord).classList.add(this.selectedMod))
      );
  }

  clearRange() {
    this.range.forEach((coord) => (
      this.getButton(coord)
        .classList.remove(this.selectedBtnMod)
    ));
    [...this.genCoordsInOrder(
      this.range[0], Cal.isCoordLess, Cal.getLastItem(this.range)
    )]
      .forEach((coord) => (
        this.getCell(coord).classList.remove(this.selectedMod)
      ));
    this.rangeCounter = 0;
    this.range = [];
    this.startRange = [];
    this.endRange = [];
  }

  addCoordInRange(coord) {
    this.getLastRange().push(coord);
  }

  selectLastRangeBtn() {
    this.getButton(Cal.getLastItem(this.getLastRange()))
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
    this.range = [...this.startRange, ...this.endRange].sort(Cal.compareCoord);
  }

  changeFirstTableMargin() {
    this.tables[0].style.marginLeft = `${-this.index * this.step}px`;
  }

  fillTable(index) {
    const gen = this.genCoordsInOrder([index, 0, 0]);
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

  getLastCellCoord(index) {
    return [index, this.getLastRowIndex(index), 6];
  }

  getLastRowIndex(index) {
    return this.getNRows(index) - 1;
  }

  getNRows(index) {
    return this.tables[index].rows.length;
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

  * genCoordsInOrder(coord, compareFunc = () => true, reference = [3e2, 0, 0]) {
    let currentCoord = coord;
    while (compareFunc(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = this.getNextCoord(currentCoord);
    }
  }

  getCoordsForward(coord, n) {
    if (n === 0) { return coord; }
    return this.getCoordsForward(this.getNextCoord(coord), --n);
  }

  getCoordsAgo(coord, n) {
    if (n === 0) { return coord; }
    return this.getCoordsAgo(this.getPrevCoord(coord), --n);
  }

  getNextCoord(coord) {
    return coord[2] < 6 
      ? [coord[0], coord[1], coord[2] + 1] 
      : this.getCell([coord[0], coord[1] + 1, 0]) 
        ? [coord[0], coord[1] + 1, 0] 
        : [coord[0] + 1, 0, 0];
  }

  getPrevCoord(coord) {
    return coord[2] > 0 
      ? [coord[0], coord[1], coord[2] - 1] 
      : this.getCell([coord[0]], coord[1] - 1, 6) 
        ? [coord[0], coord[1] - 1, 6] 
        : [coord[0] - 1, this.getLastRowIndex(coord[0] - 1), 6];
  }

  getButton(coord) {
    return this.getCell(coord).firstElementChild;
  }

  getCell(coord) {
    return this.tables[coord[0]]?.rows[coord[1]]?.cells[coord[2]];
  }

  getElemCoord(elem) {
    return [
      this.index, 
      elem.closest('.cal__week').rowIndex,
      elem.closest('.cal__day').cellIndex
    ];
  }

  static getCoord(index, nCell) {
    return [
      index,
      Math.floor((nCell - 1) / 7),
      (nCell - 1) % 7
    ];
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

  static getMinCoord(coordA, coordB) {
    return Cal.makeUnnumerical(
      Math.min(Cal.makeNumerical(coordA), Cal.makeNumerical(coordB))
    );
  }

  static compareCoord(coordA, coordB) {
    return Cal.makeNumerical(coordA) - Cal.makeNumerical(coordB);
  }

  static isCoordLess(coord, reference) {
    return Cal.makeNumerical(coord) < Cal.makeNumerical(reference);
  }

  static isCoordLessOrEqual(coord, reference) {
    return Cal.makeNumerical(coord) <= Cal.makeNumerical(reference);
  }

  static makeUnnumerical(numericalCoord) {
    return Cal.fillCoord(String(numericalCoord).split('').map(Number));
  }

  static fillCoord(coord, length = coord.length) {
    if (length >= 3) { return coord; }
    return Cal.fillCoord([0, ...coord], ++length);
  }

  static makeNumerical(coord) {
    return +coord.reduce((res, dimension) => res + dimension, '');
  }

  static getLastItem(list) {
    return list[list.length - 1];
  }
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

