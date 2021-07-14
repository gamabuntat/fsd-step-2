import '@src/pages/layout/layout.sass';
import '@styles/common.styles.js';
import '@scripts/common.scripts.js';

import './search-room.sass';

import {init} from '@library/range-slider/range-slider.js';

class AsideButton {
  constructor(button, aside) {
    this.asideButton = button;
    this.aside = aside;
    this.bindListeners();
  }

  bindListeners() {
    this.asideButton
      .addEventListener('click', () => this.handleAsideButtonClick());
  }

  handleAsideButtonClick() {
    this.aside.expandAside();
    setTimeout(() => init(document.querySelector('.js-range-slider')), 1000);
  }
}

class Filter {
  constructor(root) {
    this.filter = root;
    this.content = root.querySelector('.js-sr-main-filter__content');
    this.bindListeners();
  }

  bindListeners() {
    this.filter.addEventListener('click', () => this.handleFilterClick());
    this.content.addEventListener(
      'click',
      ((c) => () => this.handleContentClick(c += 1))(0)
    );
  }

  handleAssideButtonClick() {
    this.expandAside();
  }

  handleFilterClick() {
    // this.filter.classList.remove('sr-main-filter_expanded');
  }

  handleContentClick(counter) {
    console.log(counter);
  }

  expandAside() {
    this.filter.classList.toggle('sr-main-filter_expanded');
    document.body.style.overflowY = 'hidden';
  }
}

new AsideButton(
  document.querySelector('.js-sr-main__aside-button'),
  new Filter(document.querySelector('.js-sr-main-filter'))
);


