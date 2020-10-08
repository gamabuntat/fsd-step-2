import {MyDate, collectionOfDates, printCalendar} from '../calendar.js';

document.querySelector('.calendar__next-button').addEventListener('click', f);

function f() {
    printCalendar.ordinal++;
    console.log(printCalendar.ordinal);
    let length = collectionOfDates.length;
    let lastDate = collectionOfDates[length - 1];

    if (!collectionOfDates[printCalendar.ordinal]) {
        collectionOfDates.push(new MyDate(new Date(lastDate.year, lastDate.month + 1)));
        collectionOfDates[printCalendar.ordinal].callPrintCalendar();
    }
    else {
        collectionOfDates[printCalendar.ordinal].callPrintCalendar();
    }
}
