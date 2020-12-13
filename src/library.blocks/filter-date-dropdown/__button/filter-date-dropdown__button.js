let filterDateDropdownNameSpace = {}

filterDateDropdownNameSpace.calendar = document.querySelector('.calendar');
filterDateDropdownNameSpace.dropdown = document.querySelector('.filter-date-dropdown');
filterDateDropdownNameSpace.button = document.querySelector('.filter-date-dropdown__button');
filterDateDropdownNameSpace.expandIcon = filterDateDropdownNameSpace.dropdown.querySelector('.filter-date-dropdown__expand-icon');

filterDateDropdownNameSpace.button.addEventListener('click', expandCalendar);
filterDateDropdownNameSpace.dropdown.addEventListener('calendarHide', expandCalendar);

function expandCalendar() {
    filterDateDropdownNameSpace.expandIcon.classList.toggle('filter-date-dropdown__expand-icon_open');
    let coordDropdown = filterDateDropdownNameSpace.dropdown.getBoundingClientRect();
    let coordButton = filterDateDropdownNameSpace.button.getBoundingClientRect();
    filterDateDropdownNameSpace.calendar.style.top = coordButton.bottom - coordDropdown.y + 5 + 'px';
    filterDateDropdownNameSpace.calendar.classList.toggle('calendar__open');
}
