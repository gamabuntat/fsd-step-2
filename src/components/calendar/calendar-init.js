import Calendar from './Calendar';

window.addEventListener('load', () =>
  document.querySelectorAll('.js-calendar').forEach((cal) => new Calendar(cal))
);
