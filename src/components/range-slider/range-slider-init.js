import { RangeSlider } from './RangeSlider.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-range-slider')
    .forEach((rs) => new RangeSlider(rs))
));

