import RangeLable from './RangeLabel';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-range-label')
    .forEach((rl) => new RangeLable(rl))
);
