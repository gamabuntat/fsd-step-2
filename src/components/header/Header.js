import BEMBlock from '@scripts/BEMBlock.js';

class Header extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['burger']);
    this.setMods([
      'header__menu-button_pressed',
      'header__burger_pressed'
    ]);
    this.menuButtons = this.root
      .querySelectorAll(this.getElemClass('menu-button'));
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleBurgerClick();
    this.setHandleMenuButtonClick();
  }

  bindListeners() {
    this.elemsMap.burger.addEventListener('click', this.handleBurgerClick);
    this.menuButtons.forEach((mb) => (
      mb.addEventListener('click', this.handleMenuButtonClick))
    );
  }

  setHandleBurgerClick() {
    this.handleBurgerClick = () => {
      this.elemsMap.burger.classList.toggle(this.mods.burgerPressed);
    };
  }

  setHandleMenuButtonClick() {
    this.handleMenuButtonClick = ({ target }) => {
      if (target.classList.contains(this.mods.menuButtonPressed)) {
        this.removeMenuButtonsPressedMod();
        return;
      }
      this.removeMenuButtonsPressedMod();
      target.classList.add(this.mods.menuButtonPressed);
    };
  }

  removeMenuButtonsPressedMod() {
    this.menuButtons
      .forEach((mb) => mb.classList.remove(this.mods.menuButtonPressed));
  }
}

export default Header;

