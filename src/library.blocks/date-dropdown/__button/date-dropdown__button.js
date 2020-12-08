let dateDropdownNameSpace = {}

dateDropdownNameSpace.calendar = document.querySelector('.calendar');
dateDropdownNameSpace.dateDropdown = document.querySelector('.date-dropdown');
dateDropdownNameSpace.dateButtons = document.querySelectorAll('.date-dropdown__button');
dateDropdownNameSpace.startDateButton = document.querySelector('.date-dropdown__start-date-button');
dateDropdownNameSpace.expandIcons = dateDropdownNameSpace.dateDropdown.querySelectorAll('.date-dropdown__expand-icon');
dateDropdownNameSpace.calendarOpen = false;

dateDropdownNameSpace.dateButtons.forEach(button => button.addEventListener('click', expandCalendar));

export function expandCalendar() {
    dateDropdownNameSpace.expandIcons.forEach(icon => icon.classList.toggle('date-dropdown__expand-icon_open'));
    if (dateDropdownNameSpace.calendarOpen) {
        dateDropdownNameSpace.calendar.style.display = '';
        dateDropdownNameSpace.calendarOpen = false;
        return;
    }
    let coordDropdown = dateDropdownNameSpace.dateDropdown.getBoundingClientRect();
    let coordButton = dateDropdownNameSpace.startDateButton.getBoundingClientRect();
    dateDropdownNameSpace.calendar.style.top = coordButton.bottom - coordDropdown.y + 5 + 'px';
    dateDropdownNameSpace.calendar.style.display = 'block';
    dateDropdownNameSpace.calendarOpen = true;
}
