import {
  collectionOfDates, printCalendar, calendar, cancelButton
} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js';

const mask = 'ДД.ММ.ГГГГ';

const clearButtonLabels = () => {
  dataPicker.startRange = true;
  removeRange();
  if (calendar.classList.contains('calendar_shrink')) return;
  const startDateButton = document
    .querySelector('.js-date-dropdown__start-date');
  const endDateButton = document
    .querySelector('.js-date-dropdown__end-date');
  startDateButton.innerHTML = mask;
  endDateButton.innerHTML = mask;
};

cancelButton.addEventListener('click', clearButtonLabels);
cancelButton.addEventListener('focus', focusOnFirstDay);

function focusOnFirstDay() {
  const target = event.target;
  const currentDateObj = collectionOfDates[printCalendar.ordinal];

  target.addEventListener('keydown', () => {
    if (event.code == 'Tab' && !event.shiftKey) {
      event.preventDefault();
      currentDateObj.elem.rows[1].cells[0].lastElementChild.focus();
    }
  });
}
