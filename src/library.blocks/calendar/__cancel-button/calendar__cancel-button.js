import {collectionOfDates, printCalendar, calendar, container, cancelButton} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js'

cancelButton.addEventListener('click', function() {
    dataPicker.startRange = true;
    removeRange();
})

cancelButton.addEventListener('focus', focusOnFirstDay);

function focusOnFirstDay() {
    let target = event.target;
    let currentDateObj = collectionOfDates[printCalendar.ordinal];

    target.addEventListener('keydown', function() {
        if (event.code == 'Tab' && !event.shiftKey) {
            event.preventDefault();
            currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
        }
    })
}