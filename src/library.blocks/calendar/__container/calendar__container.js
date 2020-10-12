import {collectionOfDates, printCalendar, container} from '../calendar.js';

let nextButton = document.querySelector('.calendar__next-button');
let calendar= document.querySelector('.calendar__table');

let drawRange = function() {
    let startRange = true,
        startRangeElem,
        startRangeIndex,
        endRangeElem,
        endRangeIndex;

    return function() {
        let target = event.target;
        if (!target.classList.contains('calendar__day-button')) return;
        if (startRange) {
            if (startRangeElem) {
                removeRange();
            }
            target.classList.add('calendar__day-button_range');
            startRangeElem = target;
            startRangeIndex = printCalendar.ordinal;
            startRange = false;
        }
        else {
            endRangeIndex = printCalendar.ordinal;
            if (endRangeIndex < startRangeIndex) {
                endRangeElem = startRangeElem;
                startRangeElem = target;
            }
            else {
                endRangeElem = target;
            }
            endRangeElem.parentElement.classList.add('calendar__range-end');
            target.classList.add('calendar__day-button_range');
            startRangeElem.parentElement.classList.add('calendar__range-start');
            startRange = true;
        }

        function removeRange() {
            startRangeElem.parentElement.classList.remove('calendar__range-start');
            startRangeElem.classList.remove('calendar__day-button_range');
            endRangeElem.parentElement.classList.remove('calendar__range-end');
            endRangeElem.classList.remove('calendar__day-button_range');
        }
    }
}

container.addEventListener('click', drawRange());
container.addEventListener('focus', function() {
    let calendar = collectionOfDates[printCalendar.ordinal].elem;
    let row = 5;

    if (calendar.querySelector('.calendar__last-week') && 
        event.target == calendar.rows[row].cells[6].firstElementChild) {
        event.target.addEventListener('keydown', focusOnFirstDay);
    }
    if (!calendar.querySelector('.calendar__last-week') && 
        event.target == calendar.rows[row + 1].cells[6].firstElementChild) {
        event.target.addEventListener('keydown', focusOnFirstDay);
    }
    if (event.target == calendar.rows[1].cells[0].firstElementChild) {
        event.target.addEventListener('keydown', focusOnNextMonthButton);
    }
}, true)

function focusOnFirstDay() {
    if (event.code == 'Tab' && !event.shiftKey) {
        event.preventDefault();
        collectionOfDates[printCalendar.ordinal].elem.rows[1].cells[0].firstElementChild.focus();
    }
}

function focusOnNextMonthButton() {
    if (event.code == 'Tab' && event.shiftKey) {
        event.preventDefault();
        nextButton.focus();
    }
}
