class Cal {
  constructor(root) {
    this.firstTable = root.querySelector('.cal__main-table');
    this.prevMonthBtn = root.querySelector('.cal__prev-month-btn');
    this.nextMonthBtn = root.querySelector('.cal__next-month-btn');
    this.tables = root.getElementsByClassName('cal__main-table');
    this.step = 0;
    this.index = 0;
    this.now = new Date();
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.bindListeners();
    this.fillTable();
  }

  bindListeners() {
    this.prevMonthBtn
      .addEventListener('click', this.handlePrevMonthBtnClick.bind(this));
    this.nextMonthBtn
      .addEventListener('click', this.handleNextMonthBtnClick.bind(this));
  }

  handlePrevMonthBtnClick() {
    if (this.index == 0) { return; }
    this.index -= 1;
    this.changeFirstTableMargin();
  }

  handleNextMonthBtnClick() {
    if (this.step == 0) {
      this.step = this.getFirstTableWidth();
    }
    this.index += 1;
    this.changeFirstTableMargin();
  }

  changeFirstTableMargin() {
    this.firstTable.style.marginLeft = `${-this.index * this.step}px`;
  }

  getFirstTableWidth() {
    return this.firstTable.getBoundingClientRect().width;
  }

  getMonthLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  getWeekDay(year, month, day = 1) {
    return new Date(year, month, day).getDay();
  }

  fillTable() {
    this.tables[this.index].querySelectorAll('.cal__day-btn')
      .forEach((b) => b.innerText = 'HI');
  }
}

document.querySelectorAll('.cal').forEach((cal) => new Cal(cal));

