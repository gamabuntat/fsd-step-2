const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
export let collectionOfDates = [];
let calendar = document.querySelector('.calendar__table');
let name = document.querySelector('.calendar__month-name');
let year = document.querySelector('.calendar__year');
let weeks = calendar.rows;
let lastWeek = weeks[weeks.length - 1];

export class MyDate {
    constructor(date) {
        this.date = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.firstDay = new Date(this.year, this.month, 1).getDay();
        this.firstDayOfWeek = this.firstDay - 1 == -1 ? 6 : this.firstDay - 1;
        this.lastDate = new Date(this.year, this.month + 1, 0).getDate();
    }

    whatDate() {
        console.log([this.firstDayOfWeek, this.lastDate]);
    }

    callPrintCalendar() {
        printCalendar.call(this);
    }
}

collectionOfDates.push( new MyDate(new Date()) );
collectionOfDates[0].callPrintCalendar();
printCalendar.ordinal = 0;

export function printCalendar() {
    let day = this.firstDayOfWeek;
    let week = 1;
    let currentDate = 1;
    let nextMonthWeek = 5;
    lastWeek.classList.add('calendar__last-week');

    name.innerHTML = MONTHS[this.month];
    year.innerHTML = this.year;

    //this month
    for (; week < weeks.length; week++) {
        for (; day < weeks[week].cells.length; day++) {
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
        weeks[1].cells[prevDay].firstElementChild.innerHTML = lastMonthDate;
        lastMonthDate--;
    }

    //next month
    let nextMonthDate = 1;
    if (week < 5) day = 0;
    for (; day < weeks[nextMonthWeek].cells.length; day++) {
        weeks[nextMonthWeek].cells[day].firstElementChild.innerHTML = nextMonthDate;
        nextMonthDate++;
    }
}
