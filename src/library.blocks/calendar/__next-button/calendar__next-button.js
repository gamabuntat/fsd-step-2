import {MyDate, collectionOfDates, printCalendar, updateTitle, container, firstTable, specifyMonth, step} from '../calendar.js';
import {CALENDAR_TABLE_TEMPLATE} from '../calendar__template.js';

let nextButton = document.querySelector('.calendar__next-button');
let counter = 0;
let storedCounter = 0;
nextButton.addEventListener('click', scrollNextMonth);

function scrollNextMonth() {
    printCalendar.ordinal++;

    collectionOfDates[printCalendar.ordinal].updateTitle();
    let y = parseInt(firstTable.style.marginLeft);
    if (!y) y = 0;
    firstTable.style.marginLeft = y - step + 'px' ;

    if (!collectionOfDates[printCalendar.ordinal + 1]) {

        collectionOfDates.push(new MyDate(new Date(collectionOfDates[printCalendar.ordinal].year, collectionOfDates[printCalendar.ordinal].month + 1)))

        container.insertAdjacentHTML('beforeend', CALENDAR_TABLE_TEMPLATE);

        collectionOfDates[printCalendar.ordinal + 1].elem = container.lastElementChild;

        counter++;

        setTimeout(wrapper);
    }
}

function wrapper() {
    let i = 0;
    let ordinalValue = printCalendar.ordinal;
    if (storedCounter >= counter) return;
    do {
        specifyMonth(ordinalValue);
        i++;
        storedCounter++;
    } while (i % 3 != 0 && storedCounter < counter);
}

nextButton.addEventListener('keydown', function() {
    if (event.code == 'Tab' && !event.shiftKey) {
        event.preventDefault();
        collectionOfDates[printCalendar.ordinal].elem.rows[1].cells[0].firstElementChild.focus();
    }
})

nextButton.addEventListener('dblclick', function() {
    event.preventDefault();
})
