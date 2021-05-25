class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener('keydown', this.getKey.bind(this));
  }

  q(e) {
    if (e.data == '1') e.preventDefault();
  }

  getKey(e) {
    const isValidKey = /\d|Backspace|Arrow|Delete/.test(e.code);
    console.log(isValidKey);
    if (isValidKey && !e.shiftKey) {
      console.log(e.code);
    } else {
      e.preventDefault();
    }
  }
}

document.querySelectorAll('.js-text-field_masked')
  .forEach((input) => new MaskedTextField(input));
