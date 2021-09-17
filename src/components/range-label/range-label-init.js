import RangeLable from './RangeLabel.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-range-label')
    .forEach((rl) => new RangeLable(rl))
));

