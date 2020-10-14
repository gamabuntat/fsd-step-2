import {collectionOfDates, printCalendar, container} from '../calendar.js';

let nextButton = document.querySelector('.calendar__next-button');
let calendar= document.querySelector('.calendar__table');

let dataPicker = function() {
    let startRange = true,
        startRangeElem = [],
        endRangeElem = [];

    return function() {
        let target = event.target;
        if (!target.classList.contains('calendar__day-button')) return;

        startRange ? chooseStartButton() : chooseEndButton();

        function chooseStartButton() {
            if (startRangeElem.length) {
                removeRange();
            }
            startRangeElem.push(target);
            startRangeElem[0].rangeIndex = printCalendar.ordinal;
            startRangeElem[0].rangeX = target.parentElement.cellIndex;
            startRangeElem[0].rangeY = target.parentElement.parentElement.rowIndex;

            chooseAdditionalButton(startRangeElem);

            console.log(startRangeElem);
            startRangeElem.forEach(elem => elem.classList.add('calendar__day-button_range'));

            startRange = false;
        }

        function chooseAdditionalButton(elem) {
            if (target.classList.contains('calendar__day-button_prev-month') && elem[0].rangeIndex) {
                let prevMonth = collectionOfDates[elem[0].rangeIndex - 1].elem;
                let week = prevMonth.querySelector('.calendar__last-week') ? 5 : 6;
                elem.push(prevMonth.rows[week].cells[elem[0].rangeX].firstElementChild);
            }
            else if (target.classList.contains('calendar__day-button_next-month')) {
                let nextMonth = collectionOfDates[elem[0].rangeIndex + 1].elem;
                console.log(nextMonth);
                elem.push(nextMonth.rows[1].cells[elem[0].rangeX].firstElementChild);
            }
        }

        function chooseEndButton() {
            endRangeElem.push(target);
            endRangeElem[0].rangeIndex = printCalendar.ordinal;
            endRangeElem[0].rangeX = target.parentElement.cellIndex;
            console.log(printCalendar.ordinal);
            console.log(endRangeElem[0].rangeIndex);
            endRangeElem[0].rangeY = target.parentElement.parentElement.rowIndex;

            chooseAdditionalButton(endRangeElem);
            //endRangeX = target.parentElement.cellIndex;
            //endRangeY = target.parentElement.parentElement.rowIndex;

            //let coordRelativePosition = [
            //    endRangeIndex - startRangeIndex, 
            //    endRangeY - startRangeY,
            //    endRangeX - startRangeX
            //];

            console.log(endRangeElem);
            endRangeElem.forEach(elem => elem.classList.add('calendar__day-button_range'));

            startRange = true;

            //coordRelativePosition.find((coord, index) => {
            //    if (coord > 0) {
            //        setCorrectRange();
            //        return true;
            //    }
            //    else if (coord < 0) {
            //        setReverseRange();
            //        return true;
            //    }
            //    else if (index == 2 && coord == 0) {
            //        setUnitRange();
            //    }
            //})
        }

        //function setCorrectRange() {
        //    endRangeElem = target;
        //    drawRange();
        //}

        //function setReverseRange() {
        //    endRangeElem = startRangeElem;
        //    startRangeElem = target;
        //    drawRange();
        //}

        //function setUnitRange() {
        //    endRangeElem = startRangeElem;
        //    drawUnitRange();
        //}

        function drawRange() {
            endRangeElem.forEach(elem => elem.parentElement.classList.add('calendar__range'));
            startRangeElem.forEach(elem => elem.parentElement.classList.add('calendar__range'));
            //target.classList.add('calendar__day-button_range');
            //startRangeElem.parentElement.classList.add('calendar__range-start');
        }

        function drawUnitRange() {
        }

        function removeRange() {
            endRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));
            startRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));
            endRangeElem = [];
            startRangeElem = [];
            //startRangeElem.classList.remove('calendar__day-button_range');
            //endRangeElem.parentElement.classList.remove('calendar__range-end');
            //endRangeElem.classList.remove('calendar__day-button_range');
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
