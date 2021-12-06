import MaskedTextField from './MaskedTextField';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-masked-text-field')
    .forEach((input) => new MaskedTextField(input))
);
