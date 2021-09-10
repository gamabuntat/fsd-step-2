import Calendar from './Calendar.js';

window.addEventListener('load', () => {
  document.querySelectorAll(Calendar.getBEMClass())
    .forEach((cal) => new Calendar(cal));
});

