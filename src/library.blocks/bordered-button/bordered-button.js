class BorderedButton {
  constructor(root) {
    this.borderedButton = root;
    this.button = root.querySelector('.bordered-button__button');
    this.bindListeners();
  }

  bindListeners() {
    this.button.addEventListener('focus', this.handleButtonFocus.bind(this));
    this.button.addEventListener('blur', this.handleButtonBlur.bind(this));
  }

  handleButtonFocus() {
    this.borderedButton.classList.add('bordered-button_focused');
  }

  handleButtonBlur() {
    this.borderedButton.classList.remove('bordered-button_focused');
  }
}

document.querySelectorAll('.bordered-button')
  .forEach((b) => new BorderedButton(b));

