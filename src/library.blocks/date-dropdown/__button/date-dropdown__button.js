let dateDropdownNameSpace = {}

dateDropdownNameSpace.calendar = document.querySelector('.calendar');
dateDropdownNameSpace.dateDropdown = document.querySelector('.date-dropdown');
dateDropdownNameSpace.dateButtons = document.querySelectorAll('.date-dropdown__button');
dateDropdownNameSpace.startDateButton = document.querySelector('.date-dropdown__start-date-button');
dateDropdownNameSpace.expandIcons = dateDropdownNameSpace.dateDropdown.querySelectorAll('.date-dropdown__expand-icon');

dateDropdownNameSpace.dateButtons.forEach(button => button.addEventListener('click', expandCalendar));
dateDropdownNameSpace.dateDropdown.addEventListener('calendarHide', expandCalendar);

function expandCalendar() {
    dateDropdownNameSpace.expandIcons.forEach(icon => icon.classList.toggle('date-dropdown__expand-icon_open'));
    let coordDropdown = dateDropdownNameSpace.dateDropdown.getBoundingClientRect();
    let coordButton = dateDropdownNameSpace.startDateButton.getBoundingClientRect();
    dateDropdownNameSpace.calendar.style.top = coordButton.bottom - coordDropdown.y + 5 + 'px';
    dateDropdownNameSpace.calendar.classList.toggle('calendar__open');
}
