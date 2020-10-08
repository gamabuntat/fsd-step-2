let calendar = document.querySelector('.calendar');
let weeks = calendar.rows;
let lastWeek = weeks[weeks.length - 1];

class MyDate {
    constructor(date) {
        this.date = date.getDate();
        this.month = date.getMonth();
        this.year = date.getFullYear();
        this.firstDay = new Date(this.year, this.month, 1).getDay();
        this.firstDayOfWeek = --this.firstDay == -1 ? 6 : --this.firstDay;
        this.lastDate = new Date(this.year, this.month + 1, 0).getDate();
    }

    whatDate() {
        console.log([this.firstDayOfWeek, this.lastDate]);
    }

    callPrintCalendar() {
        printCalendar.call(this);
    }
}

let thisMonth = new MyDate(new Date());
let secondMonth = new MyDate(new Date(thisMonth.year, thisMonth.month + 1));
//thisMonth.callPrintCalendar();
secondMonth.callPrintCalendar();

function printCalendar() {
    let day = this.firstDayOfWeek;
    let currentDate = 1;
    let nextMonthWeek = 5;
    lastWeek.classList.add('calendar__last-week');

    //this month
    for (let week = 1; week < weeks.length; week++) {
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
    for (; day < weeks[nextMonthWeek].cells.length; day++) {
        weeks[nextMonthWeek].cells[day].firstElementChild.innerHTML = nextMonthDate;
        nextMonthDate++;
    }
}
