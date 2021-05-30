class Dropdown {
  constructor(dropdown) {
    this.dropdown = dropdown;
    this.expandButton = dropdown.querySelector('.js-dropdown__expand-button');
    this.list = dropdown.querySelector('.js-dropdown__list');
    this.decreaseButtons = dropdown
      .querySelectorAll('.js-dropdown__decrease-button');
    this.increaseButtons = dropdown
      .querySelectorAll('.js-dropdown__increase-button');
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
    const value = +e.target.nextElementSibling.innerText;
    if (value === 0) {
      e.target.classList.add('dropdown__decrease-button_disabled');
      return;
    }
    e.target.nextElementSibling.innerText -= 1;
  }

  handleIncreaseButtonClick(e) {
    const value = +e.target.previousElementSibling.innerText;
    if (value === 0) {
      e.target
        .previousElementSibling
        .previousElementSibling
        .classList.remove('dropdown__decrease-button_disabled');
    }
    e.target.previousElementSibling.innerText = value + 1;
  }
}

document.querySelectorAll('.js-dropdown')
  .forEach((d) => new Dropdown(d));

