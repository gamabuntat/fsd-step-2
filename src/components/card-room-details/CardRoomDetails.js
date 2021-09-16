import BEMBlock from '@scripts/BEMBlock.js';
import Glossary from '@scripts/Glossary.js';
import * as glossaries from './glossaries.js';

class CardRoomDetails extends BEMBlock {
  constructor(root) {
    super(root);
    this.setGlossary();
    this.setElemsMap();
    this.setMods();
    this.setCalendar();
    this.setObserver();
    this.setFormater();
    this.init();
  }

  setGlossary() {
    this.glossary = Glossary.create('суток', glossaries);
  }

  setElemsMap() {
    this.updateElemsMap([
      'room-number',
      'cost',
      'service-cost-per-day',
      'service-cost',
      'service-n-days',
      'service-days-death',
      'total-cost',
      'service-sale',
      'service-additional-cost'
    ]);
  }

  setMods() {
    this.mods = {
      roomNumberDeluxe: 'card-room-details__room-number_deluxe',
    };
  }

  setCalendar() {
    this.calendar = this.root.querySelector('.js-calendar');
  }

  setObserver() {
    this.observer = new MutationObserver((r) => this.shortHandUpdate(r));
  }

  setFormater() {
    this.formater = new Intl.NumberFormat('ru', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    });
  }

  init() {
    const initData = JSON.parse(sessionStorage.getItem('roomDetails') || '{}');
    this.observer.observe(this.calendar, { attributes: true });
    this.fillNumber(initData.roomNumber);
    this.elemsMap.serviceCostPerDay.innerText = (this.fillCost(initData.cost));
    this.processLuxury(initData.isLuxury);
    this.updateServiceCost();
    this.shortHandUpdate();
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
    this.elemsMap.serviceCost.innerText = this.formate(
      CardRoomDetails.unFormate(this.elemsMap.cost.innerText) 
      * this.elemsMap.serviceNDays.innerText
    );
  }

  updateTotalCost() {
    this.elemsMap.totalCost.innerText = this.formate(
      CardRoomDetails.unFormate(this.elemsMap.serviceCost.innerText) 
      - CardRoomDetails.unFormate(this.elemsMap.serviceSale.innerText)
      + +CardRoomDetails.unFormate(
        this.elemsMap.serviceAdditionalCost.innerText
      )
    );
  }

  setDays() {
    this.elemsMap.serviceNDays.innerText = this.getDays() || 0;
  }

  getDays() {
    return Math.floor(
      (new Date(this.calendar.dataset.endDate) 
        - new Date(this.calendar.dataset.startDate)) / 1000 / 60 / 60 / 24
    );
  }
  
  updateServiceDaysDeath() {
    this.elemsMap.serviceDaysDeath.innerText = this.glossary.getDefinition(
      'суток',
      +this.elemsMap.serviceNDays.innerText
    );
  }

  fillNumber(number = this.elemsMap.roomNumber.innerText) {
    this.elemsMap.roomNumber.innerText = number;
  }

  fillCost(cost = this.elemsMap.cost.innerText) {
    return this.elemsMap.cost.innerText = this.formate(cost);
  }

  processLuxury(
    isLuxury = this.elemsMap.roomNumber.classList
      .contains(this.mods.roomNumberDeluxe)
  ) {
    this.elemsMap.roomNumber.classList[isLuxury ? 'add' : 'remove'](
      this.mods.roomNumberDeluxe
    );
  }

  formate(value) {
    return this.formater.format(value).replace(/\s(?=.$)/, '');
  }

  static unFormate(currencyStr) {
    return currencyStr.replace(/\s|.$/g, '');
  }
}

export default CardRoomDetails;

