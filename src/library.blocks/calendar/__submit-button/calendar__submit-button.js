import {
  collectionOfDates,
  printCalendar,
  calendar,
  container,
  submitButton,
  shrink,
  MONTHS
} from '../calendar.js';

const calendarHideEvent = new CustomEvent("calendarHide", {bubbles: true});
const startDateButton = (
  document.querySelector('.date-dropdown__start-date') 
  || document.querySelector('.filter-date-dropdown__date-start')
);
const endDateButton = (
  document.querySelector('.date-dropdown__end-date') 
  || document.querySelector('.filter-date-dropdown__date-end')
);

submitButton.addEventListener('click', changeCalendarButtonsValue);

function changeCalendarButtonsValue() {
  if (!changeCalendarButtonsValue.rangeButtons) return;

  const startRangeButton = getStartRangeButton();
  const endRangeButton = getEndRangeButton();

  const startDate = matchElems(getCurrentMonth(startRangeButton));
  const endDate = matchElems(getCurrentMonth(endRangeButton));

  const formatDate = {
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
    startDateButton.innerHTML = `${
      formatDate.dd(startRangeButton.innerHTML)
    }.${formatDate.mm(startDate.month)}.${startDate.year}`;
    endDateButton.innerHTML = `${
      formatDate.dd(endRangeButton.innerHTML)
    }.${formatDate.mm(endDate.month)}.${endDate.year}`;
  }
  else {
    startDateButton.innerHTML = `${startRangeButton.innerHTML}
       ${formatDate.stringMonth(startDate.month)}`;
    endDateButton.innerHTML = `
      ${endRangeButton.innerHTML} ${formatDate.stringMonth(endDate.month)}
    `;
  }

  hideCalendar();

  function getStartRangeButton() {
    for (const button of changeCalendarButtonsValue.rangeButtons) {
      if (
        !button.classList.contains('calendar__day-button_next-month') 
        && !button.classList.contains('calendar__day-button_prev-month')
      ) { return button; }
    }
  }

  function getEndRangeButton() {
    const rangeBtnsReverse = (
      [...changeCalendarButtonsValue.rangeButtons].reverse()
    );
    return rangeBtnsReverse.find((b) => {
      const cl = b.classList;
      return cl.contains('calendar__day-button_next-month')
        || cl.contains('calendar__day-button_prev-month') 
        ? false
        : true;
    });
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
  const target = event.target;
  const currentDateObj = collectionOfDates[printCalendar.ordinal];

  target.addEventListener('keydown', () => {
    if (event.code == 'Tab' && event.shiftKey) {
      event.preventDefault();
      currentDateObj.elem.rows[currentDateObj.lastWeek].cells[6]
        .lastElementChild.focus();
    }
    else if (
      event.code == 'Tab' 
      && !event.shiftKey 
      && !container.querySelector('.calendar__day-button_range')
    ) {
      event.preventDefault();
      currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
    }

  });
}

export {changeCalendarButtonsValue};

