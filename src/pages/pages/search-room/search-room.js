import '@src/pages/layout/layout.sass';
import '@styles/common.styles.js';
import '@scripts/common.scripts.js';

import './search-room.sass';

class Filter {
  constructor(root) {
    this.filter = root;
    this.filter.classList.toggle('sr-main-filter_expanded');
  }
}

new Filter(document.querySelector('.js-sr-main-filter'));

