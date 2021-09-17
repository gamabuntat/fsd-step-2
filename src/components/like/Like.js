import BEMBlock from '@scripts/BEMBlock.js';

class Like extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap([ 'counter', 'btn' ]);
    this.setMods([
      'like_pressed',
      'like_focused',
      'like_focused-pressed'
    ]);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleRootClick();
    this.setHandleBtnFocus();
    this.setHandleBtnBlur();
  }

  bindListeners() {
    this.root.addEventListener('click', this.handleRootClick);
    this.elemsMap.btn.addEventListener('focus', this.handleBtnFocus);
    this.elemsMap.btn.addEventListener('blur', this.handleBtnBlur);
  }

  setHandleRootClick() {
    this.handleRootClick = () => {
      this.root.classList.toggle(this.mods.likePressed) 
        ? this.elemsMap.counter.innerText -= -1
        : this.elemsMap.counter.innerText -= 1;
      this.handleBtnFocus();
    };
  }

  setHandleBtnFocus() {
    this.handleBtnFocus = () => {
      this.handleBtnBlur();
      this.root.classList.add(
        this.root.classList.contains(this.mods.likePressed) 
          ? this.mods.likeFocusedPressed
          : this.mods.likeFocused 
      );
    };
  }

  setHandleBtnBlur() {
    this.handleBtnBlur = () => {
      this.root.classList.remove(this.mods.likeFocusedPressed);
      this.root.classList.remove(this.mods.likeFocused);
    };
  }
}

export default Like;

