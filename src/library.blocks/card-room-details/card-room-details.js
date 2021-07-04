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
    const initData = JSON.parse(sessionStorage.getItem('roomDetails') || '{}');
    this.observer.observe(this.cal, { attributes: true });
    initData?.number && this.fillNumber(initData.number);
    initData?.cost && this.fillCost(initData.cost);
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

  fillNumber(number) {
    this.roomNumber.innerText = number;
  }

  fillCost(cost) {
    this.cost.innerText = cost;
  }
}

document.querySelectorAll('.js-card-room-details')
  .forEach((c) => new CardRoomDetails(c));

