import {MyDate, collectionOfDates, printCalendar, updateTitle, container, addTodayClassForSecondMonth} from '../calendar.js';
import {CALENDAR_TABLE_TEMPLATE} from '../calendar__template.js';

let firstTable = document.querySelector('.calendar__table_first');
document.querySelector('.calendar__next-button').addEventListener('click', showNextMonth);

function showNextMonth() {
    let length = collectionOfDates.length;
    let lastDate = collectionOfDates[length - 1];

    printCalendar.ordinal++;

    if (!collectionOfDates[printCalendar.ordinal]) {
        container.insertAdjacentHTML('beforeend', CALENDAR_TABLE_TEMPLATE);
        collectionOfDates.push(new MyDate(new Date(lastDate.year, lastDate.month + 1)));
        collectionOfDates[printCalendar.ordinal].callPrintCalendar();

        if (printCalendar.ordinal == 1) addTodayClassForSecondMonth();
    }
    console.log(printCalendar.ordinal);
    collectionOfDates[printCalendar.ordinal].updateTitle();
    let y = parseInt(firstTable.style.marginLeft);
    if (!y) y = 0;
    firstTable.style.marginLeft = y - 280 + 'px' ;
    console.log(firstTable.style.marginLeft);
}
