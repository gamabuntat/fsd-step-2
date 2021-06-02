import Glossary from './glossary/Glossary.js';
import * as glossarys from './glossary/glossarys.js';

class Dropdown {
  constructor(dropdown, glossary = {}) {
    this.glossary = new Glossary(glossary);
    this.dropdown = dropdown;
    console.log(dropdown.dataset.glossary);
    this.expandButton = dropdown.querySelector('.js-dropdown__expand-button');
    this.signature = dropdown.querySelector('.js-dropdown__signature');
    this.defaultSignature = this.signature.innerText;
    this.list = dropdown.querySelector('.js-dropdown__list');
    this.decreaseButtons = dropdown
      .querySelectorAll('.js-dropdown__decrease-button');
    this.increaseButtons = dropdown
      .querySelectorAll('.js-dropdown__increase-button');
    this.counters = dropdown
      .querySelectorAll('.js-dropdown__counter');
    this.sectionNames = Array.from(
      dropdown.querySelectorAll('.js-dropdown__section-name'),
      (section) => section.innerText
    );
    this.row = 0;
    this.value = 0;
    this.signatureInterfaces = this.getSignatureInterfaces();
    this.bindListeners();
  }

  getSignatureInterfaces() {
    return this.glossary.terms.reduce((interfaces, term) => { 
      const splitedTerm = term.split('+');
      return [
        ...interfaces, 
        {
          getValue: () => (
            splitedTerm.reduce((sum, splitedTerm) => (
              +this.counters[this.sectionNames.indexOf(splitedTerm)]
                .innerText
              + sum
            ), 0)
          ),
          getName: () => (
            this.sectionNames.find((name) => name === splitedTerm[0])
          )
        }
      ];
    }, []);
  }

  bindListeners() {
    this.expandButton.addEventListener(
      'click',
      this.handleExpandButtonClick.bind(this)
    );
    this.decreaseButtons.forEach((b) => (
      b.addEventListener('click', this.handleDecreaseButtonClick.bind(this))
    ));
    this.increaseButtons.forEach((b) => (
      b.addEventListener('click', this.handleIncreaseButtonClick.bind(this))
    ));
  }

  handleExpandButtonClick() {
    this.expandButton.classList.toggle('dropdown__expand-button_pressed');
    this.list.classList.toggle('dropdown__list_hidden');
  }

  handleDecreaseButtonClick(e) {
    this.update(e.target);
    if (this.value === 0) { return; }
    if (this.value === 1) { this.toggleMod(); }
    this.changeCounterValue(-1);
    this.updateSignature(this.signatureInterfaces);
  }

  handleIncreaseButtonClick(e) {
    this.update(e.target);
    if (this.value === 0) { this.toggleMod(); }
    this.changeCounterValue(1);
    this.updateSignature(this.signatureInterfaces);
  }

  changeCounterValue(diff) {
    return this.counters[this.row].innerText = this.value + diff;
  }

  updateSignature(interfaces = this.signatureInterfaces) {
    this.signature.innerText = interfaces.reduce((res, i) => {
      const value = i.getValue();
      if (value === 0) { return res; }
      const part = `${value} ${
        this.glossary.getDefinition(i.getName(), value)
      }`;
      return res === '' ? part : `${res}, ${part}`;
    }, '') || this.defaultSignature;
  }

  toggleMod() {
    this.decreaseButtons[this.row]
      .classList.toggle('dropdown__decrease-button_disabled');
  }

  getRow(button) {
    return Math.max(
      [...this.decreaseButtons].indexOf(button),
      [...this.increaseButtons].indexOf(button),
      0
    );
  }

  update(button) {
    this.row = this.getRow(button);
    this.value = +this.counters[this.row].innerText;
  }
}

class InitDropdowns {
  constructor(dropdowns, glossarys) {
    this.dropdowns = dropdowns;
    this.glossarys = glossarys;
    this.create();
  }

  static compare(data, glossary) {
    const terms = Object.keys(glossary);
    if (data.length != terms.length) { return false; }
    return data.filter((d) => terms.indexOf(d) < 0).length == 0;
  }

  create() {
    this.dropdowns.forEach((d) => new Dropdown(d, this.findGlossary(d)));
  }

  findGlossary(dropdown) {
    const dataGlossary = dropdown.dataset.glossary.split(', ');
    return this.glossarys.find(InitDropdowns.compare.bind(null, dataGlossary));
  }
}

new InitDropdowns(
  document.querySelectorAll('.js-dropdown'), 
  Object.values(glossarys)
);

