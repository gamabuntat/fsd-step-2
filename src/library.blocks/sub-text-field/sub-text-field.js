class SubTextField {
  constructor(elem) {
    this.textField = elem;
    this.input = this.textField.querySelector('.js-sub-text-field__input');
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener(
      'focus', 
      this.handleSubTextFieldInputFocus.bind(this)
    );
    this.input.addEventListener(
      'blur',
      this.handleSubTextFieldInputBlur.bind(this)
    );
  }

  handleSubTextFieldInputFocus() {
    this.textField.classList.add('sub-text-field_active');
  }

  handleSubTextFieldInputBlur() {
    this.textField.classList.remove('sub-text-field_active');
  }
}

document.querySelectorAll('.js-sub-text-field')
  .forEach((i) => new SubTextField(i));

