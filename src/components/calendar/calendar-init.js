import Calendar from './Calendar.js';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-calendar').forEach((cal) => new Calendar(cal))
);
