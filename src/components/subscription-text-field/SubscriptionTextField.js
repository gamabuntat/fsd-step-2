import BEMBlock from '@scripts/BEMBlock.js';

class SubscriptionTextField extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['input', 'button']);
    this.setMods(['subscription-text-field_active']);
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleSubscriptionTextFieldInputFocus();
    this.setHandleSubscriptionTextFieldInputBlur();
  }

  bindListeners() {
    this.elemsMap.input.addEventListener(
      'focus',
      this.handleSubscriptionTextFieldInputFocus
    );
    this.elemsMap.input.addEventListener(
      'blur',
      this.handleSubscriptionTextFieldInputBlur
    );
    this.elemsMap.button.addEventListener(
      'focus',
      this.handleSubscriptionTextFieldInputFocus
    );
    this.elemsMap.button.addEventListener(
      'blur',
      this.handleSubscriptionTextFieldInputBlur
    );
  }

  setHandleSubscriptionTextFieldInputFocus() {
    this.handleSubscriptionTextFieldInputFocus = () => {
      this.root.classList.add(this.mods.subscriptionTextFieldActive);
    };
  }

  setHandleSubscriptionTextFieldInputBlur() {
    this.handleSubscriptionTextFieldInputBlur = () => {
      this.root.classList.remove(this.mods.subscriptionTextFieldActive);
    };
  }
}

export default SubscriptionTextField;
