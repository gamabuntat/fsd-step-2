import SubscriptionTextField from './SubscriptionTextField.js';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-subscription-text-field')
    .forEach((i) => new SubscriptionTextField(i))
);
