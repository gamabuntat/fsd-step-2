class MaskedTextField {
  constructor(input) {
    this.input = input;
    this.template = '31.12.2099';
    this.index = -1;
    this.prepValue = '';
    this.amountPoints = 0;
    this.templateValue = '';
    this.inputValue = '';
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleTextFieldInput();
  }

  bindListeners() {
    this.input.addEventListener('input', this.handleTextFieldInput);
  }

  setHandleTextFieldInput() {
    this.handleTextFieldInput = () => {
      const diff = this.getValueIndex() - this.index;
      const lastSymb = this.input.value.slice(-1);
      if (diff > 0) { this.processInput(lastSymb); }
      if (diff < 0 && !(/\d/).test(lastSymb)) { this.removeLastCharacter(); }
      this.index = this.getValueIndex();
    };
  }

  processInput(symb) {
    this.updateValues();
    if (/\d/.test(symb)) { 
      return this.handleDigit();
    }
    if (symb == '.') { 
      return this.handlePoint();
    }
    if (symb == ' ') {
      return this.autocomplete();
    }
    this.removeLastCharacter();
  }

  updateValues() {
    this.prepValue = this.trimNonDigit(this.input.value);
    this.amountPoints = (this.prepValue.match(/\./g) || []).length;
    this.templateValue = this.getValue(this.template)[this.amountPoints];
    this.inputValue = this.getValue(this.prepValue).pop();
  }

  handleDigit() {
    if (this.template[this.getValueIndex()] == '.') {
      return this.setValue(this.concatString(
        ...this.splitString(this.input.value, this.getValueIndex()),
        '.'
      ));
    }
    if (
      this.inputValue.length == this.templateValue.length 
      && +this.inputValue == 0
    ) {
      return this.setValue(
        this.prepValue.slice(0, this.prepValue.lastIndexOf(this.inputValue))
        + this.inputValue.slice(0, -1)
        + '1'
      );
    }
    if (+this.inputValue > +this.templateValue) {
      return this.setValue(
        this.prepValue.slice(0, this.prepValue.lastIndexOf(this.inputValue))
        + this.templateValue
      );
    }
  }

  handlePoint() {
    if (+this.inputValue > +this.templateValue) {
      return this.setValue(
        this.prepValue.slice(0, -this.templateValue.length) 
        + this.templateValue 
        + '.'
      );
    }
    if (this.inputValue.length == 0 || this.templateValue.length == 4) {
      return this.setValue(this.prepValue);
    }
    if (this.inputValue.length == 1 && this.templateValue.length == 2) {
      return this.addZero();
    }
    if (this.inputValue.length == 2) {
      this.setLastPoint();
    }
  }

  autocomplete() {
    if (this.inputValue.length == 1 && this.templateValue.length == 2) {
      return this.addZero();
    }
    if (this.inputValue.length == this.templateValue.length) {
      return this.setLastPoint();
    }
    if (this.templateValue.length == 4 && this.inputValue.length == 2) {
      return +this.inputValue > 21
        ? this.yearAutocomplete('19')
        : this.yearAutocomplete('20');
    }
    this.removeLastCharacter();
  }

  setLastPoint() {
    return this.setValue(this.prepValue + '.');
  }

  addZero() {
    return this.setValue((
      this.inputValue == '0' 
        ? this.prepValue + '1'
        : this.concatString(
          ...this.splitString(this.prepValue, this.prepValue.length - 1),
          '0'
        ) 
    ) + '.');
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

  trimNonDigit(str) {
    return str.replace(/[^\d]+$/, '');
  }

  removeLastCharacter() {
    return this.setValue(this.input.value.slice(0, -1));
  }

  getValue(str) {
    return str.match(/[^.]+(?=\.|$)/g) || [''];
  }

  yearAutocomplete(shortYear) {
    return this.setValue(this.concatString(
      ...this.splitString(
        this.prepValue, this.prepValue.lastIndexOf(this.inputValue)
      ),
      shortYear
    ));
  }
}

export default MaskedTextField;

