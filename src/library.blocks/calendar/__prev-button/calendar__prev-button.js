import {collectionOfDates, printCalendar, updateTitle, firstTable} from '../calendar.js';

document.querySelector('.calendar__prev-button').addEventListener('click', showPrevMonth);

function showPrevMonth() {
    if (!printCalendar.ordinal) return;
    collectionOfDates[--printCalendar.ordinal].updateTitle();
    let y = parseInt(firstTable.style.marginLeft);
    firstTable.style.marginLeft = y + 280 + 'px' ;
}
