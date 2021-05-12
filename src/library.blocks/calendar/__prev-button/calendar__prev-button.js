import {
  collectionOfDates, printCalendar, firstTable, step
} from '../calendar.js';

document.querySelector('.js-calendar__prev-button')
  .addEventListener('click', showPrevMonth);

function showPrevMonth() {
  if (printCalendar.ordinal === 0) return;
  collectionOfDates[--printCalendar.ordinal].updateTitle();
  const y = parseInt(firstTable.style.marginLeft);
  firstTable.style.marginLeft = y + step + 'px' ;
}
