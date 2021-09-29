import Impressions from './Impressions.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-impressions')
    .forEach((c) => new Impressions(c))
));

