import RangeSlider from './RangeSlider';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-range-slider')
    .forEach((rs) => new RangeSlider(rs))
);
