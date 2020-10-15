import {CALENDAR_TABLE_TEMPLATE} from './calendar__template.js';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
export let collectionOfDates = [];
export let container = document.querySelector('.calendar__container');
export let firstTable = document.querySelector('.calendar__table_first');
let titleMonth = document.querySelector('.calendar__month-name');
let titleYear = document.querySelector('.calendar__year');

function init() {
    printCalendar.ordinal = 0;
    collectionOfDates.push( new MyDate(new Date()) );
    collectionOfDates.push( new MyDate(new Date(collectionOfDates[0].year, collectionOfDates[0].month + 1)) );
    collectionOfDates[0].elem = container.firstElementChild;
    collectionOfDates[1].elem = container.lastElementChild;
    specifyMonth(printCalendar.ordinal);
    collectionOfDates[0].updateTitle();

    addTodayClassForFirstMonth();
}

export class MyDate {
    constructor(date) {
        this.today = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.firstDay = new Date(this.year, this.month, 1).getDay();
        this.firstDayOfWeek = this.firstDay - 1 == -1 ? 6 : this.firstDay - 1;
        this.lastDate = new Date(this.year, this.month + 1, 0).getDate();
        this.isPrint = false;
    }

    updateTitle() {
        titleMonth.innerHTML = MONTHS[this.month];
        titleYear.innerHTML = this.year;
    }

    callPrintCalendar() {
        printCalendar.call(this)
    }
}

export function specifyMonth(ordinalValue) {
    let calendarObj;

    if (!collectionOfDates[ordinalValue].isPrint) {
        calendarObj = collectionOfDates[ordinalValue];
    }
    else if (!collectionOfDates[ordinalValue + 1].isPrint) {
        calendarObj = collectionOfDates[ordinalValue + 1];
    }
    else if (!collectionOfDates[ordinalValue - 1].isPrint) {
        calendarObj = collectionOfDates[ordinalValue - 1];
    }
    else {
        let index = collectionOfDates.lastIndexOf(date => !date.isPrint)
        if (~index) calendarObj = collectionOfDates[index];
        else return;
    }

    calendarObj.callPrintCalendar();
}

export function printCalendar() {
    this.isPrint = true;
    let calendar = this.elem;
    let weeks = calendar.rows;
    let lastWeek = weeks[weeks.length - 1];

    let day = this.firstDayOfWeek;
    let week = 1;
    let currentDate = 1;
    let nextMonthWeek = 5;

    //this month
    for (; week < weeks.length; week++) {
        for (; day < 7; day++) {
            if (currentDate > this.lastDate) break;
            weeks[week].cells[day].firstElementChild.innerHTML = currentDate;
            currentDate++;
        }
        if (week == 6) {
            nextMonthWeek = 6;
            lastWeek.classList.remove('calendar__last-week');
        }
        if (currentDate > this.lastDate) break;
        day = 0;
    }

    //prev month
    let lastMonthDate = new Date(this.year, this.month, 0).getDate();
    let prevDay = this.firstDayOfWeek - 1;
    for (; prevDay >= 0; prevDay--) {
        weeks[1].cells[prevDay].firstElementChild.classList.add('calendar__day-button_prev-month');
        weeks[1].cells[prevDay].firstElementChild.innerHTML = lastMonthDate;
        lastMonthDate--;
    }

    //next month
    let nextMonthDate = 1;
    if (week < 5) day = 0;
    for (; day < 7; day++) {
        weeks[nextMonthWeek].cells[day].firstElementChild.classList.add('calendar__day-button_next-month');
        weeks[nextMonthWeek].cells[day].firstElementChild.innerHTML = nextMonthDate;
        nextMonthDate++;
    }
}

function addTodayClassForFirstMonth() {
    let range = collectionOfDates[0].today + collectionOfDates[0].firstDayOfWeek;
    let row = Math.ceil(range / 7);
    let cell = range % 7;
    cell == 0 ? cell = 6 : --cell;
    firstTable.rows[row].cells[cell].firstElementChild.classList.add('calendar__day-button_today');
}

function addTodayClassForSecondMonth() {
    let firstWeek = document.querySelector('.calendar__container').lastElementChild.rows[1].cells;
    let today = collectionOfDates[0].today;
    let firstDayOfWeek = collectionOfDates[1].firstDayOfWeek;
    for (let dayOfWeek = firstDayOfWeek - 1; dayOfWeek > 0; dayOfWeek--) {
        if (firstWeek[dayOfWeek].firstElementChild.innerHTML == today) firstWeek[dayOfWeek].firstElementChild.classList.add('calendar__day-button_today');
    }
}

init();
