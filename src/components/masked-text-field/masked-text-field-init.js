import MaskedTextField from './MaskedTextField.js';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-masked-text-field')
    .forEach((input) => new MaskedTextField(input))
);
