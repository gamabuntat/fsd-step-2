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
    this.fillTable(this.index);
    this.clearTable(this.index);
  }

  static getTail(list) {
    return [...list].pop();
  }

  static getNTail(number) {
    return +Cal.getTail(String(number));
  }

  static makeNumerical(coord) {
    return +coord.reduce((res, dimension) => res + dimension, '');
  }

  static isCoordLessOrEqual(coord, reference) {
    return Cal.makeNumerical(coord) <= Cal.makeNumerical(reference);
  }

  static increaseAny(any, notation, n) {
    return Number(
      String(Math.floor((any + n) / notation)) 
      + String((any + n) % notation)
    );
  }

  static increaseCoord(coord, n) {
    const c = Cal.increaseAny(coord[2], 7, n);
    const r = Cal.increaseAny(coord[1], 6, Math.floor(c / 10));
    return [
      Math.floor(r / 10) + coord[0], 
      Cal.getNTail(r), 
      Cal.getNTail(c)
    ];
  }

  static * genCoordsInOrder(coord, reference) {
    let currentCoord = coord;
    while (Cal.isCoordLessOrEqual(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = Cal.increaseCoord(currentCoord, 1);
    }
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

  getCell(coord) {
    return this.tables[coord[0]].rows[coord[1]].cells[coord[2]];
  }

  fillTable(index) {
    const gen = Cal.genCoordsInOrder([index, 0, 0], [index, 5, 6]);
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
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

