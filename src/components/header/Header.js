import BEMBlock from '@scripts/BEMBlock.js';

class Header extends BEMBlock {
  constructor(root) {
    super(root);
    this.menuButtonClass = this.getElemClass('menu-button');
    this.init();
  }

  init() {
    this.updateElemsMap(['burger']);
    this.setMods([
      'header__menu-button_pressed',
      'header__burger_pressed'
    ]);
    this.menuButtons = this.root.querySelectorAll(this.menuButtonClass);
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
      const menuButton = target.closest(this.menuButtonClass);
      const isPressedMod = menuButton
        .classList.contains(this.mods.menuButtonPressed);
      this.removeMenuButtonsPressedMod();
      if (!isPressedMod) {
        menuButton.classList.add(this.mods.menuButtonPressed); 
      }
    };
  }

  removeMenuButtonsPressedMod() {
    this.menuButtons
      .forEach((mb) => mb.classList.remove(this.mods.menuButtonPressed));
  }
}

export default Header;

