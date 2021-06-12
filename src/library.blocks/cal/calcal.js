class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.tables = root.getElementsByClassName('js-cal__main-table');
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    const now = new Date(root.dataset.date);
    this.year = now.getFullYear();
    this.month = now.getMonth();
    this.modifyTodaysBtn(now);
    this.disableBtsn(now);
    this.bindListeners(root);
  }

  modifyTodaysBtn(now) {
    this.getCell(
      Cal.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate())
    )
      .firstElementChild
      .classList.add('cal__day-btn_todays');
  }

  disableBtsn(now) {
    [...this.genCoordsInOrder(
      [0, 0, 0],
      Cal.getCoord( 0, this.getPrevMonthNDay(0) + now.getDate()),
      Cal.isCoordLess
    )]
      .forEach((coord) => (
        this.getCell(coord).firstElementChild.disabled = true
      ));
  }

  bindListeners(root) {
    this.tableContainer
      .addEventListener('click', this.handleTableContainerClick.bind(this));
    root.querySelector('.js-cal__prev-month-btn')
      .addEventListener('click', this.handlePrevMonthBtnClick.bind(this));
    root.querySelector('.js-cal__next-month-btn')
      .addEventListener('click', this.handleNextMonthBtnClick.bind(this));
  }

  handleTableContainerClick(e) {
    console.log(e);
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
      console.log(this.index);
    }
  }

  changeFirstTableMargin() {
    this.tables[0].style.marginLeft = `${-this.index * this.step}px`;
  }

  fillTable(index) {
    const gen = this.genCoordsInOrder(
      [index, 0, 0], [index, 5, 6], Cal.isCoordLessOrEqual
    );
    Cal.getPrevMonthDay(
      Cal.getMonthLastDay(this.year, this.month + index - 1),
      this.getPrevMonthNDay(index)
    ).forEach((day) => {
      const btn = this.getCell(gen.next().value).firstElementChild;
      btn.innerText = day;
      btn.classList.add('cal__day-btn_prev-month');
    });
    Cal.getPresentDay(this.getPresentNDay(index)).forEach((day) => (
      this.getCell(gen.next().value).firstElementChild.innerText = day
    ));
    Cal.getNextMonthDay(this.getNextMonthNDay(index)).forEach((day) => {
      const btn = this.getCell(gen.next().value).firstElementChild;
      btn.innerText = day;
      btn.classList.add('cal__day-btn_next-month');
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

  * genCoordsInOrder(coord, reference, compareFunc) {
    let currentCoord = coord;
    while (compareFunc(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = this.getNextCoord(currentCoord);
    }
  }

  getNextCoord(coord) {
    return coord[2] < 6 
      ? [coord[0], coord[1], coord[2] + 1] 
      : this.getCell([coord[0], coord[1] + 1, 0]) 
        ? [coord[0], coord[1] + 1, 0] 
        : [coord[0] + 1, 0, 0];
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

  static isCoordLess(coord, reference) {
    return Cal.makeNumerical(coord) < Cal.makeNumerical(reference);
  }

  static isCoordLessOrEqual(coord, reference) {
    return Cal.makeNumerical(coord) <= Cal.makeNumerical(reference);
  }

  static makeNumerical(coord) {
    return +coord.reduce((res, dimension) => res + dimension, '');
  }

  static getNumericTail(number) {
    return +Cal.getTail(String(number));
  }

  static getTail(list) {
    return [...list].pop();
  }
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

