class EventEmmiter {
  constructor() {
    this.handler = (args) => args;
  }
  
  on(handler) {
    this.handler = handler;
  }

  emmit(...args) {
    this.handler(args);
  }
}

class MenuButton extends EventEmmiter {
  constructor(button, idx) {
    super();
    this.menuButton = button;
    this.idx = idx;
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
    this.trigger && this.emmit(this.idx);
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
      (b, idx) => {
        const c = new MenuButton(b, idx);
        c.on((args) => this.openMenuHandler(args));
        return c;
      }
    );
    this.prevOpenIdx = 0;
  }

  openMenuHandler([idx]) {
    if (this.prevOpenIdx === idx) { return; }
    this.menuButtons[this.prevOpenIdx].closeMenu();
    this.prevOpenIdx = idx;
  }
}

document.querySelectorAll('.js-header').forEach((h) => new Header(h));

