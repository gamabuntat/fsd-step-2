import {template} from './template.js';

class Cal {
  constructor(root, template) {
    this.template = template;
    this.tableContainer = root.querySelector('.cal__table-container');
    this.firstTable = root.querySelector('.cal__main-table');
    this.prevMonthBtn = root.querySelector('.cal__prev-month-btn');
    this.nextMonthBtn = root.querySelector('.cal__next-month-btn');
    this.tables = root.getElementsByClassName('cal__main-table');
    this.step = 0;
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
    this.insertTemplate();
    this.index += 1;
    this.fillTable(
      this.getMonthLastDay(this.year, this.month + this.index - 1),
      this.getMonthLastDay(this.year, this.month + this.index),
      this.getWeekDay(this.year, this.month + this.index)
    );
    this.changeFirstTableMargin();
  }

  changeFirstTableMargin() {
    this.firstTable.style.marginLeft = `${-this.index * this.step}px`;
  }

  insertTemplate() {
    this.tableContainer.insertAdjacentHTML('beforeend', this.template);
  }

  getFirstTableWidth() {
    return this.firstTable.getBoundingClientRect().width;
  }

  getMonthLastDay(year, month) {
    return new Date(year, month + 1, 0).getDate();
  }

  getWeekDay(year, month, day = 1) {
    return new Date(year, month, day).getDay() || 7;
  }

  fillTable(prevLastDate, lastDate, weekDay) {
    const t1 = Array(weekDay - 1)
      .fill(prevLastDate)
      .map((d, idx) => d - idx)
      .reverse();
    const t2 = [...Array(lastDate).keys()].map((d) => d + 1);
    const t3 = [...Array(7 - (t1.length + t2.length) % 7).keys()]
      .map((d) => d + 1);
    const t = [
      ...t1,
      ...t2,
      ...(t3.length == 7 ? [] : t3)
    ];
    this.tables[this.index].querySelectorAll('.cal__day-btn')
      .forEach((b, idx) => {
        const value = t[idx];
        if (!value) {
          b.parentElement.innerHTML = '';
          return;
        }
        b.innerText = value;
      });
  }
}

document.querySelectorAll('.cal').forEach((cal) => new Cal(cal, template));

