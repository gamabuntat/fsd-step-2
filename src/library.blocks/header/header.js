class EventEmmiter {
  constructor() {
    this.handler = (args) => args;
  }
  
  on(handler) {
    this.handler = handler;
    return this;
  }

  emmit(...args) {
    this.handler(args);
  }
}

class MenuButton extends EventEmmiter {
  constructor(button) {
    super();
    this.menuButton = button;
    this.trigger = false;
    this.bindListeners();
  }

  bindListeners() {
    this.menuButton
      .addEventListener('click', () => this.handleMenuButtonClick());
  }

  handleMenuButtonClick() {
    this.toggleTrigger();
    this.menuButton.classList.toggle('header__menu-button_pressed');
    this.trigger && this.emmit();
  }

  closeMenu() {
    this.trigger = false;
    this.menuButton.classList.remove('header__menu-button_pressed');
  }

  toggleTrigger() {
    this.trigger = !this.trigger;
  }
}

class Header {
  constructor(root) {
    this.menuButtons = Array.from(
      root.querySelectorAll('.js-header__menu-button'),
      (b, idx) => (
        new MenuButton(b).on((this.openMenuHandler.bind(this, idx)))
      )
    );
    this.prevOpenIdx = 0;
  }

  openMenuHandler(idx) {
    if (this.prevOpenIdx === idx) { return; }
    this.menuButtons[this.prevOpenIdx].closeMenu();
    this.prevOpenIdx = idx;
  }
}

document.querySelectorAll('.js-header').forEach((h) => new Header(h));

