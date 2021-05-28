class SubTextField {
  constructor(elem) {
    this.textField = elem;
    this.input = this.textField.querySelector('.sub-text-field__input');
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener(
      'focus', 
      this.handlerSubTextFieldInputFocus.bind(this)
    );
    this.input.addEventListener(
      'blur',
      this.handlerSubTextFieldInputBlur.bind(this)
    );
  }

  handlerSubTextFieldInputFocus() {
    this.textField.classList.add('sub-text-field_active');
  }

  handlerSubTextFieldInputBlur() {
    this.textField.classList.remove('sub-text-field_active');
  }
}

document.querySelectorAll('.sub-text-field')
  .forEach((i) => new SubTextField(i));

