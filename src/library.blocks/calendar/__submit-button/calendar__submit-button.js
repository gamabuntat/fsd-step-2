import {collectionOfDates, printCalendar, calendar, container, submitButton} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js'
import {expandCalendar} from '@library/date-dropdown/__button/date-dropdown__button.js'


submitButton.addEventListener('click', changeCalendarButtonsValue);

export function changeCalendarButtonsValue() {
    if (!changeCalendarButtonsValue.rangeButtons) return;

    let startRangeButton = getStartRangeButton();
    let endRangeButton = getEndRangeButton();

    let startDate = matchElems(getCurrentMonth(startRangeButton));
    let endDate = matchElems(getCurrentMonth(endRangeButton));

    let formatDate = {
        dd(day) {
            return day < 10 ? `0${day}` : day
        },
        mm(month) {
            return ++month < 10 ? `0${month}` : month
        }
    }
    let startDateButton = document.querySelector('.date-dropdown__start-date');
    startDateButton.innerHTML = `${formatDate.dd(startRangeButton.innerHTML)}.${formatDate.mm(startDate.month)}.${startDate.year}`;

    let endDateButton = document.querySelector('.date-dropdown__end-date');
    endDateButton.innerHTML = `${formatDate.dd(endRangeButton.innerHTML)}.${formatDate.mm(endDate.month)}.${endDate.year}`;

    console.log(startDate, endDate);

    expandCalendar();

    function getStartRangeButton() {
        for (let button of changeCalendarButtonsValue.rangeButtons) {
            if (!button.classList.contains('calendar__day-button_next-month') && !button.classList.contains('calendar__day-button_prev-month')) return button
        }
    }

    function getEndRangeButton() {
        for (let button of changeCalendarButtonsValue.rangeButtons.reverse()) {
            if (!button.classList.contains('calendar__day-button_next-month') && !button.classList.contains('calendar__day-button_prev-month')) return button
        }
    }

    function getCurrentMonth(elem) {
        while (!elem.classList.contains('calendar__table')) {
            elem = elem.parentElement;
        }
        return elem;
    }

    function matchElems(elem) {
        return collectionOfDates.find(table => table.elem == elem);
    }
}

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
