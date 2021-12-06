import BorderedButton from './BorderedButton.js';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-bordered-button')
    .forEach((b) => new BorderedButton(b))
);
