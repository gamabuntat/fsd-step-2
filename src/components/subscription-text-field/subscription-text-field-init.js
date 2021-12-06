import SubscriptionTextField from './SubscriptionTextField';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-subscription-text-field')
    .forEach((i) => new SubscriptionTextField(i))
);
