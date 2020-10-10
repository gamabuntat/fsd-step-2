import {MyDate, collectionOfDates, printCalendar, updateTitle, container} from '../calendar.js';

let firstTable = document.querySelector('.calendar__table_first');
document.querySelector('.calendar__prev-button').addEventListener('click', showPrevMonth);

function showPrevMonth() {
    if (!printCalendar.ordinal) return;
    collectionOfDates[--printCalendar.ordinal].updateTitle();
    let y = parseInt(firstTable.style.marginLeft);
    firstTable.style.marginLeft = y + 280 + 'px' ;
    console.log(firstTable.style.marginLeft);
}
