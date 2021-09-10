import '@src/layout/layout.sass';
import '@styles/common.styles.js';
import '@scripts/common.scripts.js';
import '@scripts/initAll.js';

import './search-room.sass';

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
    this.aside.showAside();
  }
}

class Filter {
  constructor(root) {
    this.filter = root;
    this.button = root.querySelector('.js-sr-main-filter__button');
    this.plug = root.querySelector('.js-sr-main-filter__plug');
    this.bindListeners();
  }

  bindListeners() {
    this.button.addEventListener('click', () => this.handleButtonClick());
    this.plug.addEventListener('click', () => this.handlePlugClick());
    this.button.addEventListener('keydown', (e) => this.handleButtonKeydown(e));
    this.plug.addEventListener('keydown', (e) => this.handlePlugKeydown(e));
  }

  handleButtonClick() {
    this.hideAside();
  }

  handlePlugClick() {
    this.hideAside();
  }

  handleButtonKeydown(e) {
    if (e.code == 'Tab' && e.shiftKey) {
      e.preventDefault();
      this.plug.focus(); 
    }
  }

  handlePlugKeydown(e) {
    if (e.code == 'Tab' && !e.shiftKey) { 
      e.preventDefault();
      this.button.focus(); 
    }
  }

  showAside() {
    this.filter.classList.add('sr-main-filter_expanded');
    this.filter.click();
    document.body.classList.add('body--locked');
    this.button.focus();
  }

  hideAside() {
    this.filter.classList.remove('sr-main-filter_expanded');
    document.body.classList.remove('body--locked');
  }
}

new AsideButton(
  document.querySelector('.js-sr-main__aside-button'),
  new Filter(document.querySelector('.js-sr-main-filter'))
);

