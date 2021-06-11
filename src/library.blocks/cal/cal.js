class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.tables = root.getElementsByClassName('js-cal__main-table');
    this.firstTable = this.tables[0];
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    this.now = new Date(root.dataset.date);
    this.year = this.now.getFullYear();
    this.month = this.now.getMonth();
    this.bindListeners(root);
    this.startRange = [];
    this.endRange = [];
    this.init();
  }

  init() {
    this.simpleDimlePopit(this.index);
    this.simpleDimlePopit(this.index + 1);
    const todayBtn = this.searchTodayBtn();
    todayBtn.classList.add('cal__day-btn_todays');
    this.doSomething(
      [0, 0, 0],
      this.getCoords(todayBtn),
      (e) => e.disabled = true
    );
    todayBtn.disabled = false;
  }

  simpleDimlePopit(index) {
    if (index > this.tables.length - 1) { this.insertTemplate(); }
    this.fillTable(
      this.getMonthLastDay(this.month + index - 1),
      this.getMonthLastDay(this.month + index),
      this.getWeekDay(this.month + index),
      index
    );
    this.clearTable(index);
    this.addPrevMonthMod(index);
    this.addNextMonthMod(index);
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
    const btn = e.target;
    if (!btn.classList.contains('cal__day-btn')) { return; }
    const isSelected = btn.classList.toggle( 'cal__day-btn_selected');
    if (isSelected === false) {
      this.clearRange();
      return;
    }
    this.defineRange(btn);
    if (btn.classList.contains('cal__day-btn_next-month')) {
      this.defineNextRange(btn);
    }
    if (btn.classList.contains('cal__day-btn_prev-month')) {
      this.definePrevRange(btn);
    }
    console.log(this.startRange, this.endRange);
  }

  defineRange(btn) {
    const btnCoords = this.getCoords(btn);
    const startSize = this.startRange.length;
    const endSize = this.endRange.length;
    const isStart = startSize == 0;
    const isEnd = startSize !== 0 && endSize == 0;
    if (isStart) {
      this.startRange.push(btnCoords);
      return;
    }
    if (isEnd) {
      this.endRange.push(btnCoords);
      return;
    }
    this.clearRange();
    this.startRange.push(btnCoords);
  }

  defineNextRange() {
    const preCoords = this.endRange.pop() || this.startRange.pop();
    this.getCell([preCoords[0] + 1, 0, preCoords[2]])
      .firstElementChild
      .classList.add('cal__day-btn_selected');
  }

  definePrevRange() {
    return;
  }

  clearRange() {
    [...this.startRange, ...this.endRange].forEach(
      (coords) => this.doSomething(
        coords, 
        coords, 
        (b) => b.classList.remove('cal__day-btn_selected')
      )
    );
    this.startRange = [];
    this.endRange = [];
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
      this.simpleDimlePopit(this.index + 1);
    }
  }

  changeFirstTableMargin() {
    this.firstTable.style.marginLeft = `${-this.index * this.step}px`;
  }

  insertTemplate() {
    this.tableContainer.insertAdjacentHTML('beforeend', this.template);
  }

  getMonthLastDay(month, year = this.year) {
    return new Date(year, month + 1, 0).getDate();
  }

  getWeekDay(month, year = this.year, day = 1) {
    return new Date(year, month, day).getDay() || 7;
  }

  fillTable(prevLastDate, lastDate, weekDay, index) {
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
    this.tables[index].querySelectorAll('.cal__day-btn')
      .forEach((b, idx) => b.innerText = concatMonth[idx] || '');
  }

  clearTable(index) {
    const presentDays = this.getMonthLastDay(this.month + index);
    const prevDays = this.getWeekDay(this.month + index) - 1;
    const filledRows = Math.ceil((presentDays + prevDays) / 7) - 1;
    for (let i = 5; i > filledRows; i--) {
      this.getTail(this.tables[index].rows).remove();
    }
  }

  addPrevMonthMod(index) {
    const firstRowBtns = [
      ...this.tables[index].rows[0].querySelectorAll('.cal__day-btn')
    ];
    firstRowBtns.slice(0, this.searchFirstDateIndex(firstRowBtns))
      .forEach((b) => b.classList.add('cal__day-btn_prev-month'));
  }

  addNextMonthMod(index) {
    const lastRowBtbs = [
      ...[...this.tables[index].rows]
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
    console.log(this.getWeekDay());
    const todayPlusPrevMonth = this.getWeekDay(this.month) 
      + this.now.getDate() - 1;
    return this.firstTable
      .rows[Math.ceil(todayPlusPrevMonth / 7) - 1]
      .cells[todayPlusPrevMonth % 7 - 1]
      .firstElementChild;
  }

  getCoords(elem) {
    return [
      this.index, 
      elem.closest('.cal__week').rowIndex,
      elem.closest('.cal__day').cellIndex
    ];
  }

  getCell(coords) {
    return this.tables[coords[0]].rows[coords[1]].cells[coords[2]];
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
          const elem = this.getCell([table, row, cell]);
          fn(isBtn ? elem.firstElementChild : elem);
        }
      }
    }
  }

  getTail(list) {
    return [...list].pop();
  }
}

document.querySelectorAll('.cal').forEach((cal) => new Cal(cal));

