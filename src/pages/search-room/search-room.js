import '@src/layout/layout.sass';
import '@styles/common-styles.js';
import '@scripts/common-scripts.js';

import './search-room.sass';
import SearchRoom from './SearchRoom.js';

window.addEventListener('load', () => (
  new SearchRoom(document.querySelector('.js-search-room'))
));

