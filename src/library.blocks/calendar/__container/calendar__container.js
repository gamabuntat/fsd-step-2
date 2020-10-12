import {collectionOfDates, printCalendar, container} from '../calendar.js';

let nextButton = document.querySelector('.calendar__next-button');
let calendar= document.querySelector('.calendar__table');

let dataPicker = function() {
    let startRange = true,
        startRangeElem,
        startRangeIndex,
        startRangeX,
        startRangeY,
        endRangeElem,
        endRangeIndex,
        endRangeX,
        endRangeY;

    return function() {
        let target = event.target;
        if (!target.classList.contains('calendar__day-button')) return;
        if (startRange) {
            if (startRangeElem) {
                removeRange();
            }
            startRangeIndex = printCalendar.ordinal;
            target.classList.add('calendar__day-button_range');
            startRangeElem = target;
            startRange = false;
            startRangeX = startRangeElem.parentElement.cellIndex;
            startRangeY = startRangeElem.parentElement.parentElement.rowIndex;
        }
        else {
            endRangeIndex = printCalendar.ordinal;
            endRangeX = target.parentElement.cellIndex;
            endRangeY = target.parentElement.parentElement.rowIndex;

            let coordRelativePosition = [
                endRangeIndex - startRangeIndex, 
                endRangeY - startRangeY,
                endRangeX - startRangeX
            ];

            coordRelativePosition.find((coord, index) => 
                coord > 0 ? setCorrectRange() :
                coord < 0 ? setReverseRange() :
                coord == 0 && index == 2 ? setUnitRange() : null
            )

            function setCorrectRange() {
                endRangeElem = target;
                drawRange();
                return true;
            }

            function setReverseRange() {
                endRangeElem = startRangeElem;
                startRangeElem = target;
                drawRange();
                return true;
            }

            function setUnitRange() {
                endRangeElem = startRangeElem;
            }
        }

        function drawRange() {
            endRangeElem.parentElement.classList.toggle('calendar__range-end');
            target.classList.add('calendar__day-button_range');
            startRangeElem.parentElement.classList.toggle('calendar__range-start');
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

container.addEventListener('click', dataPicker());
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
