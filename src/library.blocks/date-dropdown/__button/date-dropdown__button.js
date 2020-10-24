let calendar = document.querySelector('.calendar');
let dateDropdown = document.querySelector('.date-dropdown');
let dateButtons = document.querySelectorAll('.date-dropdown__button');
let startDateButton = document.querySelector('.date-dropdown__start-date-button');
let calendarOpen = false;
dateButtons.forEach(button => button.addEventListener('click', expandCalendar));

function expandCalendar() {
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
