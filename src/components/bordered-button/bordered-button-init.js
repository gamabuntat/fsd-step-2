import BorderedButton from './BorderedButton';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-bordered-button')
    .forEach((b) => new BorderedButton(b))
);
