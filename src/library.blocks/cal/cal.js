class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.tables = root.getElementsByClassName('js-cal__main-table');
    this.firstTable = this.tables[0];
    this.dayBtns = root.getElementsByClassName('js-cal__day-btn');
    this.prevMonthBtn = root.querySelector('.js-cal__prev-month-btn');
    this.nextMonthBtn = root.querySelector('.js-cal__next-month-btn');
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    this.now = new Date(root.dataset.date);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.today = this.now.getDate();
    this.bindListeners();
    this.fillTable(
      this.getMonthLastDay(this.year, this.month - 1),
      this.getMonthLastDay(this.year, this.month),
      this.getWeekDay(this.year, this.month)
    );
    this.addPrevMonthMod();
    this.addNextMonthMod();
    this.todayBtn = this.searchTodayBtn();
    this.setTodayMod();
    this.doSomething(
      [0, 0, 0], this.getElemCoord(this.todayBtn), (e) => e.disabled = true
    );
    this.todayBtn.disabled = false;
  }

  bindListeners() {
    this.tableContainer
      .addEventListener('click', this.handleTableContainerClick.bind(this));
    this.prevMonthBtn
      .addEventListener('click', this.handlePrevMonthBtnClick.bind(this));
    this.nextMonthBtn
      .addEventListener('click', this.handleNextMonthBtnClick.bind(this));
  }

  handleTableContainerClick(e) {
    const btn = e.target;
    if (!btn.classList.contains('cal__day-btn')) { return; }
    const selectedMod = 'cal__day-btn_selected';
    btn.classList.toggle(selectedMod);
    console.log('hi');
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

  searchTodayBtn() {
    const todayPlusPrevMonth = this.getWeekDay(this.year, this.month) 
      + this.now.getDate() - 1;
    return this.firstTable
      .rows[Math.ceil(todayPlusPrevMonth / 7) - 1]
      .cells[todayPlusPrevMonth % 7 - 1]
      .firstElementChild;
  }

  setTodayMod() {
    this.todayBtn.classList.add('cal__day-btn_todays');
  }

  getElemCoord(elem) {
    return [
      this.index, 
      elem.closest('.cal__week').rowIndex,
      elem.closest('.cal__day').cellIndex
    ];
  }

  doSomething(start, end, fn, isBtn = true) {
    for (let table = start[0]; table <= end[0]; table++) {
      for (
        let row = (table === start[0] ? start[1] : 0); 
        row <= (
          table === end[0] 
            ? end[1] 
            : this.tables[table].rows.length - 1
        ); 
        row++
      ) {
        for (
          let cell = (table === start[0] ? start[2] : 0);
          cell <= (table === end[0] && row === end[1] ? end[2] : 6);
          cell++
        ) {
          const elem = this.tables[table].rows[row].cells[cell];
          fn(isBtn ? elem.firstElementChild : elem);
        }
      }
    }
  }
}

document.querySelectorAll('.cal').forEach((cal) => new Cal(cal));

