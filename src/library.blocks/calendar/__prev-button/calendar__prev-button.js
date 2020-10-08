import {MyDate, collectionOfDates, printCalendar} from '../calendar.js';

document.querySelector('.calendar__prev-button').addEventListener('click', f);

function f() {
    if (!printCalendar.ordinal) return;
    printCalendar.ordinal--;
    collectionOfDates[printCalendar.ordinal].callPrintCalendar();
}
