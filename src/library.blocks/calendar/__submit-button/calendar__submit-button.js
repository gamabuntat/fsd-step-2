import {collectionOfDates, printCalendar, calendar, container, submitButton} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js'


submitButton.addEventListener('click', function() {
    dataPicker.startRange = true;
    removeRange();
})


submitButton.addEventListener('focus', focusOnLastDay);

function focusOnLastDay() {
    let target = event.target;
    let currentDateObj = collectionOfDates[printCalendar.ordinal];

    target.addEventListener('keydown', function() {
        if (event.code == 'Tab' && event.shiftKey) {
            event.preventDefault();
            currentDateObj.elem.rows[currentDateObj.lastWeek].cells[6].lastElementChild.focus();
        }
        else if (event.code == 'Tab' && !event.shiftKey && !container.querySelector('.calendar__day-button_range')) {
            event.preventDefault();
            currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
        }

    })
}

