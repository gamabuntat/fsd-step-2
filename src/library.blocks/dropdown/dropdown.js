import Glossary from './Glossary.js';

class Dropdown {
  constructor(dropdown, glossary = {
    'взрослые, дети': ['гость', 'гостя', 'гостей'],
    'младенцы': ['младенец', 'младенца', 'младенцев']
  }) {
    this.glossary = new Glossary(glossary);
    this.dropdown = dropdown;
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
    this.bindListeners();
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
  }

  handleIncreaseButtonClick(e) {
    this.update(e.target);
    if (this.value === 0) { this.toggleMod(); }
    this.changeButtonSignature(
      this.value + 1,
      this.glossary.getDefinition(
        this.sectionNames[this.row],
        this.changeCounterValue(1)
      )
    );
  }

  changeButtonSignature(value, word) {
    return this.signature.innerText = value + ' ' + word;
  }

  changeCounterValue(diff) {
    return this.counters[this.row].innerText = this.value + diff;
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

document.querySelectorAll('.js-dropdown')
  .forEach((d) => new Dropdown(d));

