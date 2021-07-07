class CardRoomDetails {
  constructor(root) {
    this.root = root;
    this.c = `.${[...this.root.classList].find((c) => c.startsWith('js'))}`;
    this.roomNumber = this.root.querySelector(`${this.c}__room-number`);
    this.cost = this.root.querySelector(`${this.c}__cost`);
    this.serviceCostPerDay = this.root
      .querySelector(`${this.c}__service-cost-per-day`);
    this.serviceCost = this.root.querySelector(`${this.c}__service-cost`);
    this.serviceNDays = this.root.querySelector(`${this.c}__service-n-days`);
    this.serviceDaysDeath = this.root
      .querySelector(`${this.c}__service-days-death`);
    this.totalCost = this.root.querySelector(`${this.c}__total-cost`);
    this.serviceSale = this.root.querySelector(`${this.c}__service-sale`);
    this.serviceAdditionalCost = this.root
      .querySelector(`${this.c}__service-additional-cost`);
    this.cal = this.root.querySelector('.js-cal');
    this.observer = new MutationObserver((r) => this.shortHandUpdate(r));
    this.formater = new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    });
    this.init();
  }

  init() {
    const initData = JSON.parse(sessionStorage.getItem('roomDetails') || '{}');
    this.observer.observe(this.cal, { attributes: true });
    this.fillNumber(initData.roomNumber);
    this.serviceCostPerDay.innerText = (this.fillCost(initData.cost));
    this.processLuxury(initData.isLuxury);
    this.updateServiceCost();
    this.shortHandUpdate();
  }

  shortHandUpdate() {
    if (this.cal.hasAttribute('data-date-is-ready')) {
      this.setDays();
      this.updateServiceDaysDeath();
      this.updateServiceCost();
      this.updateTotalCost();
    }
  }

  updateServiceCost() {
    this.serviceCost.innerText = this.formate(
      CardRoomDetails.unFormate(this.cost.innerText) 
      * this.serviceNDays.innerText
    );
  }

  updateTotalCost() {
    this.totalCost.innerText = this.formate(
      CardRoomDetails.unFormate(this.serviceCost.innerText) 
      - CardRoomDetails.unFormate(this.serviceSale.innerText)
      + +CardRoomDetails.unFormate(this.serviceAdditionalCost.innerText)
    );
  }

  setDays() {
    this.serviceNDays.innerText = this.getDays();
  }

  getDays() {
    return (new Date(this.cal.dataset.endDate) 
      - new Date(this.cal.dataset.startDate)) / 1000 / 60 / 60 / 24;
  }
  
  updateServiceDaysDeath() {
    this.serviceDaysDeath.innerText = this.serviceNDays.innerText === '1' 
      ? ' сутки' : ' суток';
  }

  fillNumber(number = this.roomNumber.innerText) {
    this.roomNumber.innerText = number;
  }

  fillCost(cost = this.cost.innerText) {
    return this.cost.innerText = this.formate(cost);
  }

  processLuxury(
    isLuxury = this.roomNumber.classList
      .contains('card-room-details__room-number_deluxe')
  ) {
    this.roomNumber.classList[isLuxury ? 'add' : 'remove'](
      'card-room-details__room-number_deluxe'
    );
  }

  formate(value) {
    return this.formater.format(value).replace(/\s(?=.$)/, '');
  }

  static unFormate(currencyStr) {
    return currencyStr.replace(/\s|.$/g, '');
  }
}

document.querySelectorAll('.js-card-room-details')
  .forEach((c) => new CardRoomDetails(c));

