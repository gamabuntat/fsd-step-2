import Calendar from './Calendar.js';

const calendarInit = () => {
  document.querySelectorAll(Calendar.getBEMClass())
    .forEach((cal) => new Calendar(cal));
};

export default calendarInit;

