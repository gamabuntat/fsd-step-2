import {collectionOfDates, printCalendar, calendar, container, submitButton, shrink, MONTHS} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js';

let calendarHideEvent = new CustomEvent("calendarHide", {bubbles: true});
let startDateButton = document.querySelector('.date-dropdown__start-date') || document.querySelector('.filter-date-dropdown__date-start');
let endDateButton = document.querySelector('.date-dropdown__end-date') || document.querySelector('.filter-date-dropdown__date-end');

submitButton.addEventListener('click', changeCalendarButtonsValue);

export function changeCalendarButtonsValue() {
  if (!changeCalendarButtonsValue.rangeButtons) return;

  let startRangeButton = getStartRangeButton();
  let endRangeButton = getEndRangeButton();

  let startDate = matchElems(getCurrentMonth(startRangeButton));
  let endDate = matchElems(getCurrentMonth(endRangeButton));

  let formatDate = {
    dd(day) {
      return day < 10 ? `0${day}` : day;
    },
    mm(month) {
      return ++month < 10 ? `0${month}` : month;
    },
    stringMonth(month) {
      return MONTHS[month].slice(0, 3).toLowerCase();
    }
  };
  if (!shrink) {
    startDateButton.innerHTML = `${formatDate.dd(startRangeButton.innerHTML)}.${formatDate.mm(startDate.month)}.${startDate.year}`;
    endDateButton.innerHTML = `${formatDate.dd(endRangeButton.innerHTML)}.${formatDate.mm(endDate.month)}.${endDate.year}`;
  }
  else {
    startDateButton.innerHTML = `${startRangeButton.innerHTML} ${formatDate.stringMonth(startDate.month)}`;
    endDateButton.innerHTML = `${endRangeButton.innerHTML} ${formatDate.stringMonth(endDate.month)}`;
  }

  hideCalendar();

  function getStartRangeButton() {
    for (let button of changeCalendarButtonsValue.rangeButtons) {
      if (!button.classList.contains('calendar__day-button_next-month') && !button.classList.contains('calendar__day-button_prev-month')) return button;
    }
  }

  function getEndRangeButton() {
    for (let button of changeCalendarButtonsValue.rangeButtons.reverse()) {
      if (!button.classList.contains('calendar__day-button_next-month') && !button.classList.contains('calendar__day-button_prev-month')) return button;
    }
  }

  function getCurrentMonth(elem) {
    while (!elem.classList.contains('calendar__table')) {
      elem = elem.parentElement;
    }
    return elem;
  }

  function matchElems(elem) {
    return collectionOfDates.find((table) => table.elem == elem);
  }

  function hideCalendar() {
    calendar.dispatchEvent(calendarHideEvent);
  }
}

submitButton.addEventListener('focus', focusOnLastDay);

function focusOnLastDay() {
  let target = event.target;
  let currentDateObj = collectionOfDates[printCalendar.ordinal];

  target.addEventListener('keydown', () => {
    if (event.code == 'Tab' && event.shiftKey) {
      event.preventDefault();
      currentDateObj.elem.rows[currentDateObj.lastWeek].cells[6].lastElementChild.focus();
    }
    else if (event.code == 'Tab' && !event.shiftKey && !container.querySelector('.calendar__day-button_range')) {
      event.preventDefault();
      currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
    }

  });
}
