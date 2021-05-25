class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.template = [3, 1, '.', 1, 2, '.', 9, 9, 9, 9];
    this.index = 0;
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener('input', this.handleInputInput.bind(this));
  }

  handleInputInput() {
    const diff = this.getValueIndex() - this.index;
    if (diff > 0) {
      if (!this.isDigit()) { 
        this.backWord();
        return; 
      }
      if (this.template[this.getValueIndex()] == '.') {
        this.setPoint();
      }
    } else if (diff < 0 && this.getTail() == '.') {
      this.backWord();
    }
    this.index = this.getValueIndex();
  }

  getValueIndex() {
    return this.input.value.length - 1;
  }

  getTail(o = this.input.value) {
    return o.length == 1 ? o : o[o.length - 1];
  }

  isDigit(key = this.getTail()) {
    return /\d/.test(key);
  }

  backWord() {
    this.input.value = this.input.value.slice(0, -1);
  }

  setPoint(value = this.input.value) {
    this.input.value  = value.slice(0, -1) + '.' + value[value.length - 1];
  }
}

document.querySelectorAll('.js-text-field_masked')
  .forEach((input) => new MaskedTextField(input));
