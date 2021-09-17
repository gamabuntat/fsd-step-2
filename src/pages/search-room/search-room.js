import '@src/layout/layout.sass';
import '@styles/common-styles.js';
import '@scripts/common-scripts.js';

import './search-room.sass';

import AsideButton from './AsideButton.js';
import Filter from './Filter.js';

new AsideButton(
  document.querySelector('.js-sr-main__aside-button'),
  new Filter(document.querySelector('.js-sr-main-filter'))
);

