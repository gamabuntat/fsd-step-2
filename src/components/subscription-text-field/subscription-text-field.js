class SubscriptionTextField {
  constructor(elem) {
    this.textField = elem;
    this.input = this.textField
      .querySelector('.js-subscription-text-field__input');
    this.button = this.textField
      .querySelector('.js-subscription-text-field__button');
    this.bindListeners();
  }

  bindListeners() {
    this.input.addEventListener(
      'focus', 
      this.handleSubscriptionTextFieldInputFocus.bind(this)
    );
    this.input.addEventListener(
      'blur',
      this.handleSubscriptionTextFieldInputBlur.bind(this)
    );
    this.button.addEventListener(
      'focus',
      this.handleSubscriptionTextFieldInputFocus.bind(this)
    );
    this.button.addEventListener(
      'blur',
      this.handleSubscriptionTextFieldInputBlur.bind(this)
    );
  }

  handleSubscriptionTextFieldInputFocus() {
    this.textField.classList.add('subscription-text-field_active');
  }

  handleSubscriptionTextFieldInputBlur() {
    this.textField.classList.remove('subscription-text-field_active');
  }
}

document.querySelectorAll('.js-subscription-text-field')
  .forEach((i) => new SubscriptionTextField(i));

