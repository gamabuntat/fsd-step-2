import {collectionOfDates, printCalendar, calendar, container, cancelButton} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js';

let mask = 'ДД.ММ.ГГГГ';

cancelButton.addEventListener('click', () => {
  dataPicker.startRange = true;
  removeRange();
  if (calendar.classList.contains('calendar_shrink')) return;
  let startDateButton = document.querySelector('.date-dropdown__start-date');
  let endDateButton = document.querySelector('.date-dropdown__end-date');
  startDateButton.innerHTML = mask;
  endDateButton.innerHTML = mask;
});

cancelButton.addEventListener('focus', focusOnFirstDay);

function focusOnFirstDay() {
  let target = event.target;
  let currentDateObj = collectionOfDates[printCalendar.ordinal];

  target.addEventListener('keydown', () => {
    if (event.code == 'Tab' && !event.shiftKey) {
      event.preventDefault();
      currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
    }
  });
}
