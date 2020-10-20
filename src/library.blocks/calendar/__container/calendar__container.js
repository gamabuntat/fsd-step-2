import {collectionOfDates, printCalendar, container} from '../calendar.js';

let nextButton = document.querySelector('.calendar__next-button');

let dataPicker = function() {
    let startRange = true,
        startRangeElem = [],
        endRangeElem = [];

    return function() {
        let target = event.target;
        if (!target.classList.contains('calendar__day-button')) return;
        let targetRow = target.parentElement.parentElement.rowIndex;
        let targetCell = target.parentElement.cellIndex;

        if (printCalendar.ordinal == 0) {
            if (targetRow < collectionOfDates[0].todayY) return;
            else if (targetRow == collectionOfDates[0].todayY && targetCell < collectionOfDates[0].todayX) return;
        }
        else if (printCalendar.ordinal == 1 && collectionOfDates[1].haveToday) {
            if (targetRow == 1 && targetCell < collectionOfDates[0].todayX) return;
        }

        if (startRange) {
            if (startRangeElem.length) removeRange();
            chooseButton(startRangeElem);
            startRange = false;
        }
        else {
            chooseButton(endRangeElem);
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
            range[0].rangeY = targetRow;
            range[0].rangeX = targetCell;

            chooseAdditionalButton(range);

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
            let nextElemIndex = 0;
            drawOneWeek(elems[nextElemIndex]);

            function drawOneWeek(elem = false) {
                if (!elem) return;
                let index = elem.rangeIndex;
                let row = elem.rangeY;
                let daysOfCurrentWeek = collectionOfDates[index].elem.rows[row].cells;
                let cell = elem == elems[elems.length - 1] ? 0 : elem.rangeX + 1;
                for (; cell < 7; cell++) {
                    let button = daysOfCurrentWeek[cell].firstElementChild;
                    if (button.classList.contains('calendar__day-button_range')) {
                        if (elems[nextElemIndex + 1] && elem.rangeY == elems[nextElemIndex + 1].rangeY) {
                            elems[nextElemIndex].parentElement.classList.add('calendar__range-start');
                            elems[nextElemIndex + 1].parentElement.classList.add('calendar__range-end');
                        }
                        else {
                            elems[nextElemIndex].parentElement.classList.add('calendar__range-end');
                        }
                        nextElemIndex += 2;
                        drawOneWeek(elems[nextElemIndex]);
                        return;
                    }
                    //button.classList.add('calendar__day-button_in-range');
                    button.parentElement.classList.add('calendar__range');
                }
                let lastWeek = collectionOfDates[index].elem.querySelector('.calendar__last-week') ? 5 : 6;
                elem.parentElement.classList.add('calendar__range-start');
                nextElemIndex++;
                if (row == lastWeek && collectionOfDates[index].elem.querySelector('.calendar__day-button_next-month')) {
                    drawOneWeek(elems[nextElemIndex]);
                }
                else {
                    drawMainRange();
                }

                function drawMainRange() {
                    for (let nextIndex = index ; nextIndex <= elems[elems.length - 1].rangeIndex; nextIndex++) {
                        let calendar = collectionOfDates[nextIndex].elem;
                        let lastWeek = collectionOfDates[nextIndex].elem.querySelector('.calendar__last-week') ? 5 : 6;
                        let nextRow = nextIndex == index ? row + 1 : 1;
                        for ( ; nextRow <= lastWeek; nextRow++) {
                            for (let cell = 0; cell < 7; cell++) {
                                let button = calendar.rows[nextRow].cells[cell].firstElementChild;
                                if (button.classList.contains('calendar__day-button_range')) {
                                    elems[nextElemIndex].parentElement.classList.add('calendar__range-end');
                                    nextElemIndex++;
                                    drawOneWeek(elems[nextElemIndex]);
                                    return;
                                }
                                //button.classList.add('calendar__day-button_in-range');
                                button.parentElement.classList.add('calendar__range');
                            }
                        }
                    }
                }
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
        }

        function removeRange() {
            for (let button of container.querySelectorAll('.calendar__day-button_range')) {
                button.classList.remove('calendar__day-button_range');
            }
            for (let start of container.querySelectorAll('.calendar__range-start')) {
                start.classList.remove('calendar__range-start')
            }
            for (let end of container.querySelectorAll('.calendar__range-end')) {
                end.classList.remove('calendar__range-end')
            }
            for (let range of container.querySelectorAll('.calendar__range')) {
                range.classList.remove('calendar__range')
            }
            endRangeElem = [];
            startRangeElem = [];
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
