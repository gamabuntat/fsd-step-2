let calendar = document.querySelector('.calendar');
let dateDropdown = document.querySelector('.date-dropdown');
let dateButtons = document.querySelectorAll('.date-dropdown__button');
let startDateButton = document.querySelector('.date-dropdown__start-date-button');
let calendarOpen = false;
let expandIcons = dateDropdown.querySelectorAll('.date-dropdown__expand-icon');
dateButtons.forEach(button => button.addEventListener('click', expandCalendar));

function expandCalendar() {
    expandIcons.forEach(icon => icon.classList.toggle('date-dropdown__expand-icon_open'));
    if (calendarOpen) {
        calendar.style.display = '';
        calendarOpen = false;
        return;
    }
    let coord = dateDropdown.getBoundingClientRect();
    calendar.style.top = coord.height + 5 + 'px';
    calendar.style.display = 'block';
    calendarOpen = true;
}
