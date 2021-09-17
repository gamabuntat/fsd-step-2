class AsideButton {
  constructor(asideButton, aside) {
    this.asideButton = asideButton;
    this.aside = aside;
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleAsideButtonClick();
  }

  bindListeners() {
    this.asideButton
      .addEventListener('click', this.handleAsideButtonClick);
  }

  setHandleAsideButtonClick() {
    this.handleAsideButtonClick = () => {
      this.aside.showAside();
    };
  }
}

export default AsideButton;

