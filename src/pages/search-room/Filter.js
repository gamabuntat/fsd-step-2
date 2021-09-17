import BEMBlock from '@scripts/BEMBlock.js';

class Filter extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  showAside() {
    this.root.classList.add(this.mods.srMainFilterExpanded);
    this.root.click();
    document.body.classList.add(this.mods.bodyLocked);
    this.elemsMap.button.focus();
  }

  init() {
    this.updateElemsMap([
      'button',
      'plug'
    ]);
    this.setMods([
      'sr-main-filter_expanded',
      'body--locked',
    ]);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleButtonClick();
    this.setHandlePlugClick();
    this.setHandleButtonKeydown();
    this.setHandlePlugKeydown();
  }

  bindListeners() {
    this.elemsMap.button.addEventListener('click', this.handleButtonClick);
    this.elemsMap.plug.addEventListener('click', this.handlePlugClick);
    this.elemsMap.button.addEventListener('keydown', this.handleButtonKeydown);
    this.elemsMap.plug.addEventListener('keydown', this.handlePlugKeydown);
  }

  setHandleButtonClick() {
    this.handleButtonClick = () => {
      this.hideAside();
    };
  }

  setHandlePlugClick() {
    this.handlePlugClick = () => {
      this.hideAside();
    };
  }

  setHandleButtonKeydown() {
    this.handleButtonKeydown = (e) => {
      if (e.code == 'Tab' && e.shiftKey) {
        e.preventDefault();
        this.elemsMap.plug.focus(); 
      }
    };
  }

  setHandlePlugKeydown() {
    this.handlePlugKeydown = (e) => {
      if (e.code == 'Tab' && !e.shiftKey) { 
        e.preventDefault();
        this.elemsMap.button.focus(); 
      }
    };
  }

  hideAside() {
    this.root.classList.remove(this.mods.srMainFilterExpanded);
    document.body.classList.remove(this.mods.bodyLocked);
  }
}

export default Filter;

