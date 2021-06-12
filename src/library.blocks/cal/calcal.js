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
  }

  static getTail(list) {
    return [...list].pop();
  }

  static getNumericTail(number) {
    return +Cal.getTail(String(number));
  }

  static makeNumerical(coord) {
    return +coord.reduce((res, dimension) => res + dimension, '');
  }

  static isCoordLessOrEqual(coord, reference) {
    return Cal.makeNumerical(coord) <= Cal.makeNumerical(reference);
  }

  static getMonthLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  static getWeekDay(year, month, day = 1) {
    return new Date(year, month, day).getDay() || 7;
  }

  static getPrevMonthDay(prevLastDate, prevMonthNDay) {
    return Array(prevMonthNDay)
      .fill(prevLastDate)
      .map((d, idx) => d - idx)
      .reverse();
  }

  static getPresentDay(presentMonthNDay) {
    return [...Array(presentMonthNDay).keys()].map((d) => d + 1);
  }

  static getNextMonthDay(nextMonthNDay) {
    return Array(nextMonthNDay).fill(1).map((d, idx) => d + idx);
  }

  static getCoord(index, nCell) {
    return [
      index,
      Math.floor((nCell - 1) / 7),
      (nCell - 1) % 7
    ];
  }

  getCell(coord) {
    return this.tables[coord[0]]?.rows[coord[1]]?.cells[coord[2]];
  }

  getNextCoord(coord) {
    return coord[2] < 6 
      ? [coord[0], coord[1], coord[2] + 1] 
      : this.getCell([coord[0], coord[1] + 1, 0]) 
        ? [coord[0], coord[1] + 1, 0] 
        : [coord[0] + 1, 0, 0];
  }

  * genCoordsInOrder(coord, reference) {
    let currentCoord = coord;
    while (Cal.isCoordLessOrEqual(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = this.getNextCoord(currentCoord);
    }
  }

  getPrevMonthNDay(index) {
    return Cal.getWeekDay(this.year, this.month + index) - 1;
  }

  getPresentNDay(index) {
    return Cal.getMonthLastDay(this.year, this.month + index);
  }

  getNextMonthNDay(index) {
    return 7 - Cal.getWeekDay(
      this.year, 
      this.month + index,
      Cal.getMonthLastDay(this.year, this.month + index)
    );
  }

  clearTable(index) {
    const nFilledRows = Math.ceil(
      (this.getPrevMonthNDay(index) + this.getPresentNDay(index)) / 7
    );
    for (let row = 5; row >= nFilledRows; row--) {
      this.tables[index].rows[row].remove();
    }
  }

  fillTable(index) {
    const gen = this.genCoordsInOrder([index, 0, 0], [index, 5, 6]);
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
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

