import Impressions from './Impressions';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-impressions')
    .forEach((c) => new Impressions(c))
);
