import BEMBlock from '@scripts/BEMBlock.js';

class BorderedButton extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap([
      'button',
    ]);
    this.setMods([
      'bordered-button_focused'
    ]);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleButtonFocus();
    this.setHandleButtonBlur();
  }

  bindListeners() {
    this.elemsMap.button.addEventListener('focus', this.handleButtonFocus);
    this.elemsMap.button.addEventListener('blur', this.handleButtonBlur);
  }

  setHandleButtonFocus() {
    this.handleButtonFocus = () => {
      this.root.classList.add(this.mods.borderedButtonFocused);
    };
  }

  setHandleButtonBlur() {
    this.handleButtonBlur = () => {
      this.root.classList.remove(this.mods.borderedButtonFocused);
    };
  }
}

export default BorderedButton;

