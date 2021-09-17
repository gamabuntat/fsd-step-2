import { init } from './impressions.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-impressions__circle-container')
    .forEach((c) => init(c))
));

