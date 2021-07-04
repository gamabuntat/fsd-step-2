class CardRoomDetails {
  constructor(root) {
    this.root = root;
    this.c = `.${[...this.root.classList].find((c) => c.startsWith('js'))}`;
    this.roomNumber = this.root.querySelector(`${this.c}__room-number`);
    this.cost = this.root.querySelector(`${this.c}__cost`);
    this.cal = this.root.querySelector('.js-cal');
    this.days = this.root.querySelector(`${this.c}__days`);
    this.observer = new MutationObserver((r) => this.handleCalAttrsChanges(r));
    this.init();
  }

  init() {
    this.observer.observe(this.cal, { attributes: true });
    this.fillNumber();
    this.fillCost();
  }

  handleCalAttrsChanges() {
    if (this.cal.hasAttribute('data-date-is-ready')) {
      this.setDays(this.getDays());
    }
  }

  setDays(days) {
    this.days.innerText = days;
  }

  getDays() {
    return (new Date(this.cal.dataset.endDate) 
      - new Date(this.cal.dataset.startDate)) / 1000 / 60 / 60 / 24 + 1;
  }

  fillNumber() {
    const storedNumber = sessionStorage.getItem('roomNumber');
    if (storedNumber) { 
      this.roomNumber.innerText = storedNumber;
    }
  }

  fillCost() {
    const storedCost = sessionStorage.getItem('roomCost');
    if (storedCost) {
      this.cost.innerText = storedCost;
    }
  }
}

document.querySelectorAll('.js-card-room-details')
  .forEach((c) => new CardRoomDetails(c));

