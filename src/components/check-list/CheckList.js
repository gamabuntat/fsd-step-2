import BEMBlock from '@scripts/BEMBlock.js';

class CheckList extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['button']);
    this.setMods(['check-list_open' ]);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleButtonClick();
  }

  bindListeners() {
    this.elemsMap.button.addEventListener('click', this.handleButtonClick);
  }

  setHandleButtonClick() {
    this.handleButtonClick = () => {
      this.root.classList.toggle(this.mods.checkListOpen);
    };
  }
}

export default CheckList;

