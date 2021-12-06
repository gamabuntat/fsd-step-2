import BEMBlock from '@scripts/BEMBlock.js';

class Header extends BEMBlock {
  constructor(root) {
    super(root);
    this.menuButtonClass = this.getElemClass('menu-button');
    this.init();
  }

  init() {
    this.updateElemsMap(['burger']);
    this.setMods(['header__menu-button_pressed', 'header__burger_pressed']);
    this.menuButtons = this.root.querySelectorAll(this.menuButtonClass);
    this.closeTrigger = true;
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleWindowClick();
    this.setHandleHeaderClick();
    this.setHandleBurgerClick();
    this.setHandleMenuButtonClick();
  }

  bindListeners() {
    window.addEventListener('click', this.handleWindowClick);
    this.root.addEventListener('click', this.handleHeaderClick);
    this.elemsMap.burger.addEventListener('click', this.handleBurgerClick);
    this.menuButtons.forEach((mb) =>
      mb.addEventListener('click', this.handleMenuButtonClick)
    );
  }

  setHandleWindowClick() {
    this.handleWindowClick = () => {
      if (this.closeTrigger) {
        this.closeOpenSubMenu();
        this.closeMenu();
      }
      this.closeTrigger = true;
    };
  }

  closeOpenSubMenu() {
    this.removeMenuButtonsPressedMod();
  }

  closeMenu() {
    this.elemsMap.burger.classList.remove(this.mods.burgerPressed);
  }

  setHandleHeaderClick() {
    this.handleHeaderClick = () => {
      this.closeTrigger = false;
    };
  }

  setHandleBurgerClick() {
    this.handleBurgerClick = () => {
      this.elemsMap.burger.classList.toggle(this.mods.burgerPressed);
    };
  }

  setHandleMenuButtonClick() {
    this.handleMenuButtonClick = ({ target }) => {
      const menuButton = target.closest(this.menuButtonClass);
      const isPressedMod = menuButton.classList.contains(
        this.mods.menuButtonPressed
      );
      this.removeMenuButtonsPressedMod();
      if (!isPressedMod) {
        menuButton.classList.add(this.mods.menuButtonPressed);
        this.closeSubMenuTrigger = false;
      }
    };
  }

  removeMenuButtonsPressedMod() {
    this.menuButtons.forEach((mb) =>
      mb.classList.remove(this.mods.menuButtonPressed)
    );
  }
}

export default Header;
