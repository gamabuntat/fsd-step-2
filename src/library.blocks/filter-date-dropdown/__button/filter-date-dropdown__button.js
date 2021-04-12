class filterDateDropdown {
  constructor(root) {
    this.dropdown = root;
    this.calendar = this.getElem('.calendar');
    this.button = this.getElem('.filter-date-dropdown__button');
    this.icon = this.getElem('.filter-date-dropdown__expand-icon');
    this.bindListeners();
  }

  getElem(selector) {
    return this.dropdown.querySelector(selector);
  }

  bindListeners() {
    this.button.addEventListener('click', this.expandCalendar.bind(this));
    this.dropdown.addEventListener(
      'calendarHide', this.expandCalendar.bind(this)
    );
  }

  expandCalendar() {
    this.icon.classList.toggle('filter-date-dropdown__expand-icon_open');
    const coordDropdown = this.dropdown.getBoundingClientRect();
    const coordButton = this.button.getBoundingClientRect();
    this.calendar.style.top = coordButton.bottom - coordDropdown.y + 5 + 'px';
    this.calendar.classList.toggle('calendar__open');
  }
}

document.querySelectorAll('.filter-date-dropdown').forEach((d) => (
  new filterDateDropdown(d)
));

