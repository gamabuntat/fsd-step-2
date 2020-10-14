import {MyDate, collectionOfDates, printCalendar, updateTitle, container, firstTable} from '../calendar.js';
import {CALENDAR_TABLE_TEMPLATE} from '../calendar__template.js';

let nextButton = document.querySelector('.calendar__next-button');
let counter = 0;
nextButton.addEventListener('click', scrollNextMonth);

function scrollNextMonth() {
    printCalendar.ordinal++;

    let y = parseInt(firstTable.style.marginLeft);
    if (!y) y = 0;
    firstTable.style.marginLeft = y - 280 + 'px' ;

    if (!collectionOfDates[printCalendar.ordinal + 1]) {

        collectionOfDates.push(new MyDate(new Date(collectionOfDates[printCalendar.ordinal].year, collectionOfDates[printCalendar.ordinal].month + 1)))

        container.insertAdjacentHTML('beforeend', CALENDAR_TABLE_TEMPLATE);

        collectionOfDates[printCalendar.ordinal + 1].elem = container.lastElementChild;

        //container.lastElementChild.dataset.counter = printCalendar.ordinal + 1;

        counter++;

        setTimeout(f);
    }

    //collectionOfDates[printCalendar.ordinal].updateTitle();

    //console.log(container.querySelector( `[data-counter="${printCalendar.ordinal}"]`));
    console.log("counter" + counter);
    console.log(collectionOfDates.length - 2);
    //console.log(collectionOfDates[collectionOfDates.length - 2].elem);
    //console.log(collectionOfDates[printCalendar.ordinal].month);
}

let i = 0;
function f() {
    console.log('start');
    //if (i >= counter) return;
    do {
        i++;
    } while (i % 3 != 0)
    console.log(i);
}

function ff(ordinalValue) {

};
function wrapper() {
    console.log('start');
    let storedOrdinalValue = printCalendar.ordinal;
    console.log(storedOrdinalValue);
    do {
        //printcalendar();
        ff(storedOrdinalValue);
        i++;
    } while (i % 3 != 0 && i < counter);
}
//function showNextMonth() {
//    //console.log(printCalendar.ordinal);
//
//    let targetDate = collectionOfDates[printCalendar.ordinal];
//    let targetYear = targetDate.year;
//    let targetMonth = targetDate.month + 1;
//    if (targetMonth == 12) {
//        ++targetYear;
//        targetMonth = 0;
//    };
//
//    function rendrerNextMonth() {
//        collectionOfDates.push(new MyDate(new Date(targetYear, targetMonth)));
//        collectionOfDates[printCalendar.ordinal + 1].callPrintCalendar();
//        scrollNextMonth();
//    }
//}

nextButton.addEventListener('keydown', function() {
    if (event.code == 'Tab' && !event.shiftKey) {
        event.preventDefault();
        collectionOfDates[printCalendar.ordinal].elem.rows[1].cells[0].firstElementChild.focus();
    }
})

nextButton.addEventListener('dblclick', function() {
    event.preventDefault();
})
