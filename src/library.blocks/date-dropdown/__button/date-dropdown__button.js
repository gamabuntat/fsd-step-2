const calendar = document.querySelector('.js-calendar');
const dateDropdown = document.querySelector('.js-date-dropdown');
const dateButtons = document.querySelectorAll('.js-date-dropdown__button');
const expandIcons = (
  dateDropdown.querySelectorAll('.date-dropdown__expand-icon')
);

const expandCalendar = (
  expandIcons, dateDropdown, startDateButton, calendar
) => () => {
  expandIcons.forEach((icon) => (
    icon.classList.toggle('date-dropdown__expand-icon_open'))
  );
  const coordDropdown = dateDropdown.getBoundingClientRect();
  const coordButton = startDateButton.getBoundingClientRect();
  calendar.style.top = coordButton.bottom - coordDropdown.y + 5 + 'px';
  calendar.classList.toggle('calendar__open');
};

const expandCalendarBind = expandCalendar(
  expandIcons, dateDropdown, dateButtons[0], calendar
);

dateButtons.forEach((button) => (
  button.addEventListener('click', expandCalendarBind)
));
dateDropdown.addEventListener('calendarHide', expandCalendarBind);

