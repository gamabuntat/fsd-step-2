import BEMBlock from '@scripts/BEMBlock.js';
import Glossary from '@scripts/Glossary.js';

import * as glossaries from './glossaries';

class CardRoomDetails extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.setGlossary();
    this.updateElemsMap([
      'room-number',
      'cost',
      'service-cost-per-day',
      'service-cost',
      'service-n-days',
      'service-days-death',
      'total-cost',
      'service-sale',
      'service-additional-cost',
    ]);
    this.localeOpt = {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    };
    this.setMods(['card-room-details__room-number_deluxe']);
    this.setCalendar();
    this.setObserver();
    const initData = JSON.parse(sessionStorage.getItem('roomDetails') || '{}');
    this.observer.observe(this.calendar, { attributes: true });
    this.fillNumber(initData.roomNumber);
    this.elemsMap.serviceCostPerDay.textContent = this.fillCost(initData.cost);
    this.processLuxury(initData.isLuxury);
    this.updateServiceCost();
    this.shortHandUpdate();
  }

  setGlossary() {
    this.glossary = Glossary.create('суток', glossaries);
  }

  setCalendar() {
    this.calendar = this.root.querySelector('.js-calendar');
  }

  setObserver() {
    this.observer = new MutationObserver((r) => this.shortHandUpdate(r));
  }

  shortHandUpdate() {
    if (this.calendar.hasAttribute('data-date-is-ready')) {
      this.setDays();
      this.updateServiceDaysDeath();
      this.updateServiceCost();
      this.updateTotalCost();
    }
  }

  updateServiceCost() {
    this.elemsMap.serviceCost.textContent = this.formate(
      CardRoomDetails.unFormate(this.elemsMap.cost.textContent) *
        this.elemsMap.serviceNDays.textContent
    );
  }

  updateTotalCost() {
    this.elemsMap.totalCost.textContent = this.formate(
      Number(CardRoomDetails.unFormate(this.elemsMap.serviceCost.textContent)) -
        Number(
          CardRoomDetails.unFormate(this.elemsMap.serviceSale.textContent)
        ) +
        Number(
          CardRoomDetails.unFormate(
            this.elemsMap.serviceAdditionalCost.textContent
          )
        )
    );
  }

  setDays() {
    this.elemsMap.serviceNDays.textContent = this.getDays() || 0;
  }

  getDays() {
    return Math.floor(
      (new Date(this.calendar.dataset.endDate) -
        new Date(this.calendar.dataset.startDate)) /
        1000 /
        60 /
        60 /
        24
    );
  }

  updateServiceDaysDeath() {
    this.elemsMap.serviceDaysDeath.textContent = this.glossary.getDefinition(
      'суток',
      Number(this.elemsMap.serviceNDays.textContent)
    );
  }

  fillNumber(number = this.elemsMap.roomNumber.textContent) {
    this.elemsMap.roomNumber.textContent = number;
  }

  fillCost(cost = this.elemsMap.cost.textContent) {
    const formattedCost = this.formate(Number(cost));
    this.elemsMap.cost.textContent = formattedCost;
    return formattedCost;
  }

  processLuxury(
    isLuxury = this.elemsMap.roomNumber.classList.contains(
      this.mods.roomNumberDeluxe
    )
  ) {
    this.elemsMap.roomNumber.classList[isLuxury ? 'add' : 'remove'](
      this.mods.roomNumberDeluxe
    );
  }

  formate(value) {
    return value
      .toLocaleString('ru-RU', this.localeOpt)
      .replace(/\s(?!\d)/g, '');
  }

  static unFormate(currencyStr) {
    return currencyStr.replace(/\s|.$/g, '');
  }
}

export default CardRoomDetails;
