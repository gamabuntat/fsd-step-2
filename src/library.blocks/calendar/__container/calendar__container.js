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

        if (startRange) {
            if (startRangeElem.length) removeRange();
            chooseButton(startRangeElem);
            startRange = false;
        }
        else {
            chooseButton(endRangeElem);
            console.log(endRangeElem);
            if (startRangeElem.find(elem => elem == endRangeElem[0])) {
                endRangeElem = [];
                return;
            }
            drawRange();
            startRange = true;
        }

        function chooseButton(range) {
            range.push(target);
            range[0].rangeIndex = printCalendar.ordinal;
            range[0].rangeY = target.parentElement.parentElement.rowIndex;
            range[0].rangeX = target.parentElement.cellIndex;

            chooseAdditionalButton(range);

            console.log(range);
            range.forEach(elem => elem.classList.add('calendar__day-button_range'));
        }

        function chooseAdditionalButton(range) {
            let rangeWeek = range[0].parentElement.parentElement;
            if (rangeWeek.querySelector('.calendar__day-button_prev-month') && range[0].rangeIndex) {
                let prevMonth = collectionOfDates[range[0].rangeIndex - 1].elem;
                let week = prevMonth.querySelector('.calendar__last-week') ? 5 : 6;
                range.push(prevMonth.rows[week].cells[range[0].rangeX].firstElementChild);
                range[1].rangeIndex = range[0].rangeIndex - 1;
                range[1].rangeY = week;
                range[1].rangeX = range[0].rangeX;
            }
            else if (rangeWeek.querySelector('.calendar__day-button_next-month')) {
                let nextMonth = collectionOfDates[range[0].rangeIndex + 1].elem;
                range.push(nextMonth.rows[1].cells[range[0].rangeX].firstElementChild);
                range[1].rangeIndex = range[0].rangeIndex + 1;
                range[1].rangeY = 1;
                range[1].rangeX = range[0].rangeX;
            }
        }

        function drawRange() {
            let elems = startRangeElem.concat(endRangeElem);
            elems.sort(compareElems);
            console.log(elems);
        }

        function compareElems(a, b) {
            let result;
            let coordRelativePosition = [
                a.rangeIndex - b.rangeIndex, 
                a.rangeY - b.rangeY,
                a.rangeX - b.rangeX
            ];
            coordRelativePosition.find(coord => {
                if (coord != 0) {
                    result = coord;
                    return true;
                }
            })
            return result;
        }

        function removeRange() {
            endRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));
            startRangeElem.forEach(elem => elem.classList.remove('calendar__day-button_range'));
            endRangeElem = [];
            startRangeElem = [];
        }

        function chooseEndButton() {

            endRangeX = target.parentElement.cellIndex;
            endRangeY = target.parentElement.parentElement.rowIndex;


            coordRelativePosition.find((coord, index) => {
                if (coord > 0) {
                    setCorrectRange();
                    return true;
                }
                else if (coord < 0) {
                    setReverseRange();
                    return true;
                }
                else if (index == 2 && coord == 0) {
                    setUnitRange();
                }
            })
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

        function drawUnitRange() {
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
