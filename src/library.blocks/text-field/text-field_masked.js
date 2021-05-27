class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.template = '31.12.2099';
    this.index = -1;
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener('input', this.handleInputInput.bind(this));
  }

  handleInputInput() {
    const diff = this.getValueIndex() - this.index;
    const lastSymb = this.input.value.slice(-1);
    if (diff > 0) { this.processInput(lastSymb); }
    if (diff < 0 && lastSymb == '.') { this.removeLastCharacter(); }
    this.index = this.getValueIndex();
  }

  processInput(symb) {
    if (symb == '.') { 
      this.handleLastPoint();
      return;
    }
    if (/\d/.test(symb)) { 
      if (this.template[this.getValueIndex()] == '.') {
        this.setValue(this.concatString(
          ...this.splitString(this.input.value, this.getValueIndex()),
          '.'
        ));
      }
      if (this.input.value.length == this.template.length) {
        const fullValue = this.input.value;
        const templateValue = this.getValue(this.template).pop();
        const inputValue = this.getValue(fullValue).pop();
        if (+inputValue > +templateValue) {
          this.setValue(
            fullValue.slice(0, fullValue.lastIndexOf(inputValue))
            + templateValue
          );
        }
      }
      return;
    }
    this.removeLastCharacter();
  }

  handleLastPoint() {
    const prepString = this.trimEndPoints(this.input.value);
    const amountPoints = (prepString.match(/\./g) || []).length;
    const templateValue = this.getValue(this.template)[amountPoints];
    const inputValue = this.getValue(prepString).pop();
    if (+inputValue > +templateValue) {
      return this.setValue(
        prepString.slice(0, -templateValue.length) + templateValue + '.'
      );
    }
    if (inputValue.length == 0 || templateValue.length == 4) {
      return this.setValue(prepString);
    }
    if (inputValue.length == 1 && templateValue.length == 2) {
      return this.setValue((
        inputValue == '0' 
          ? prepString + '1'
          : this.concatString(
            ...this.splitString(prepString, prepString.length - 1),
            '0'
          ) 
      ) + '.');
    }
    if (inputValue.length == 2) {
      return this.setValue(prepString + '.');
    }
  }

  getValueIndex() {
    return this.input.value.length - 1;
  }

  setValue(value) {
    return this.input.value = value;
  }

  splitString(str, pos) {
    return [str.slice(0, pos), str.slice(pos)];
  }

  concatString(start, end, symbol = '') {
    return start + symbol + end;
  }

  trimEndPoints(str) {
    return str.replace(/\.+$/, '');
  }

  removeLastCharacter() {
    return this.setValue(this.input.value.slice(0, -1));
  }

  getValue(str) {
    return str.match(/[^.]+(?=\.|$)/g) || [''];
  }
}

document.querySelectorAll('.js-text-field_masked')
  .forEach((input) => new MaskedTextField(input));

