class Header {
  constructor(root) {
    this.menuButtons = root.querySelectorAll('.js-header__menu-button');
    this.bindListeners();
  }

  bindListeners() {
    this.menuButtons.forEach((b) => (
      b.addEventListener('click', (e) => this.handleMenuButtonClick(e)))
    );
  }

  handleMenuButtonClick(e) {
    console.log(e);
    e.target.classList.toggle('header__menu-button_pressed');
  }
}

document.querySelectorAll('.js-header').forEach((h) => new Header(h));

