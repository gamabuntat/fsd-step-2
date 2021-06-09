class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.cal__table-container');
    this.firstTable = root.querySelector('.cal__main-table');
    this.template = this.tableContainer.innerHTML;
    this.prevMonthBtn = root.querySelector('.cal__prev-month-btn');
    this.nextMonthBtn = root.querySelector('.cal__next-month-btn');
    this.tables = root.getElementsByClassName('cal__main-table');
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    this.now = new Date(root.dataset.date);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.bindListeners();
    this.fillTable(
      this.getMonthLastDay(this.year, this.month - 1),
      this.getMonthLastDay(this.year, this.month),
      this.getWeekDay(this.year, this.month)
    );
    this.addPrevMonthMod();
    this.addNextMonthMod();
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
    this.index += 1;
    if (this.index === this.tables.length) {
      this.insertTemplate();
      this.fillTable(
        this.getMonthLastDay(this.year, this.month + this.index - 1),
        this.getMonthLastDay(this.year, this.month + this.index),
        this.getWeekDay(this.year, this.month + this.index)
      );
    }
    this.changeFirstTableMargin();
    this.addPrevMonthMod();
    this.addNextMonthMod();
  }

  changeFirstTableMargin() {
    this.firstTable.style.marginLeft = `${-this.index * this.step}px`;
  }

  insertTemplate() {
    this.tableContainer.insertAdjacentHTML('beforeend', this.template);
  }

  getMonthLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  getWeekDay(year, month, day = 1) {
    return new Date(year, month, day).getDay() || 7;
  }

  fillTable(prevLastDate, lastDate, weekDay) {
    const prevMonth = Array(weekDay - 1)
      .fill(prevLastDate)
      .map((d, idx) => d - idx)
      .reverse();
    const presentMonth = [...Array(lastDate).keys()].map((d) => d + 1);
    const nextMonth = [
      ...Array(7 - (prevMonth.length + presentMonth.length) % 7).keys()
    ].map((d) => d + 1);
    const concatMonth = [
      ...prevMonth,
      ...presentMonth,
      ...(nextMonth.length == 7 ? [] : nextMonth)
    ];
    this.tables[this.index].querySelectorAll('.cal__day-btn')
      .forEach((b, idx) => b.innerText = concatMonth[idx]);
    this.clearTable(concatMonth.length);
  }

  clearTable(nDays) {
    for (let i = 5; i > nDays / 7 - 1; i--) {
      this.tables[this.index].rows[i].remove();
    }
  }

  addPrevMonthMod() {
    const firstRowBtns = [
      ...this.tables[this.index].rows[0].querySelectorAll('.cal__day-btn')
    ];
    firstRowBtns.slice(0, this.searchFirstDateIndex(firstRowBtns))
      .forEach((b) => b.classList.add('cal__day-btn_prev-month'));
  }

  addNextMonthMod() {
    const lastRowBtbs = [
      ...[...this.tables[this.index].rows]
        .pop()
        .querySelectorAll('.cal__day-btn')
    ];
    const oneIndex = this.searchFirstDateIndex(lastRowBtbs);
    if (oneIndex == -1) { return; }
    lastRowBtbs.slice(-(7 - oneIndex))
      .forEach((b) => b.classList.add('cal__day-btn_next-month'));
  }

  searchFirstDateIndex(week) {
    return week.findIndex((day) => +day.innerText === 1);
  }
}

document.querySelectorAll('.cal').forEach((cal) => new Cal(cal));

