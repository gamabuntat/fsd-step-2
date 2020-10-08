import {MyDate, collectionOfDates, printCalendar} from '../calendar.js';

document.querySelector('.calendar__next-button').addEventListener('click', f);

function f() {
    let length = collectionOfDates.length;
    let lastDate = collectionOfDates[length - 1];
    collectionOfDates.push(new MyDate(new Date(lastDate.year, lastDate.month + 1)));
    collectionOfDates[length].callPrintCalendar();
}
