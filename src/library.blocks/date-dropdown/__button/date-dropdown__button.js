const calendar = document.querySelector('.calendar');
const dateDropdown = document.querySelector('.date-dropdown');
const dateButtons = document.querySelectorAll('.date-dropdown__button');
const startDateButton = (
  document.querySelector('.date-dropdown__start-date-button')
);
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
  expandIcons, dateDropdown, startDateButton, calendar
);

dateButtons.forEach((button) => (
  button.addEventListener('click', expandCalendarBind)
));
dateDropdown.addEventListener('calendarHide', expandCalendarBind);

