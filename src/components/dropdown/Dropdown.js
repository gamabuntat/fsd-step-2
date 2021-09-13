import BEMBlock from '@scripts/BEMBlock.js';
import Glossary from '@scripts/Glossary.js';
import * as glossaries from './glossaries.js';

class Dropdown extends BEMBlock {
  constructor(root) {
    super(root);
    this.setGlossary();
    this.setElemsMap();
    this.setListElems();
    this.setMods();
    this.row = 0;
    this.value = 0;
    this.countersSum = 0;
    this.signatureInterfaces = this.getSignatureInterfaces();
    this.setListeners();
    this.bindListeners();
    this.init();
  }

  init() {
    this.defaultSignature = this.elemsMap.signature.innerText;
    this.hash = this.root.dataset.hash 
      || (this.root.dataset.hash = 'commonDrpdwnHash');
    this.setCounterValues(this.getInitValues());
    if (this.root.hasAttribute('data-open')) {
      this.handleExpandButtonClick();
    }
  }

  setGlossary() {
    this.glossary = Glossary.create(this.root.dataset.glossary, glossaries);
  }

  setElemsMap() {
    this.updateElemsMap([
      'expand-button',
      'signature',
      'list',
      'apply-button',
      'cancel-button',
    ]);
  }

  setListElems() {
    this.decreaseButtons = this.root
      .querySelectorAll(this.getElemClass('decrease-button'));
    this.increaseButtons = this.root
      .querySelectorAll(this.getElemClass('increase-button'));
    this.counters = [
      ...this.root.querySelectorAll(this.getElemClass('counter'))
    ];
    this.sectionNames = Array.from(
      this.root.querySelectorAll(this.getElemClass('section-name')),
      (section) => section.innerText
    );
  }

  setMods() {
    this.mods = {
      expandButtonPressed: 'dropdown__expand-button_pressed',
      listHedden: 'dropdown__list_hidden',
      decreaseButtonDisabled: 'dropdown__decrease-button_disabled',
      cancelButtonHidden: 'dropdown__cancel-button_hidden',
    };
  }

  getSignatureInterfaces() {
    return this.glossary.terms.reduce((interfaces, term) => { 
      const splitedTerm = term.split('+');
      return [
        ...interfaces, 
        {
          getValue: () => (
            splitedTerm.reduce((sum, splitedTerm) => (
              +this.counters[this.sectionNames.indexOf(splitedTerm)]
                .innerText
              + sum
            ), 0)
          ),
          getName: () => (
            this.sectionNames.find((name) => name === splitedTerm[0])
          )
        }
      ];
    }, []);
  }

  getInitValues() {
    return this.root.dataset.counterValues 
      || sessionStorage.getItem(this.hash)
      || '';
  }

  setListeners() {
    this.setHandleExpandButtonClick();
    this.setHandleDecreaseButtonClick();
    this.setHandleIncreaseButtonClick();
    this.setHandeApplyButtonClick();
    this.setHandleCancelButtonClick();
  }

  bindListeners() {
    this.elemsMap.expandButton.addEventListener(
      'click',
      this.handleExpandButtonClick
    );
    this.decreaseButtons.forEach((b) => (
      b.addEventListener('click', this.handleDecreaseButtonClick)
    ));
    this.increaseButtons.forEach((b) => (
      b.addEventListener('click', this.handleIncreaseButtonClick)
    ));
    this.elemsMap.applyButton && this.elemsMap.applyButton.addEventListener(
      'click', 
      this.handeApplyButtonClick
    );
    this.elemsMap.cancelButton && this.elemsMap.cancelButton.addEventListener(
      'click',
      this.handleCancelButtonClick
    );
  }

  setHandleExpandButtonClick() {
    this.handleExpandButtonClick = () => {
      this.elemsMap.expandButton
        .classList.toggle(this.mods.expandButtonPressed);
      this.elemsMap.list.classList.toggle(this.mods.listHedden);
    };
  }

  setHandleDecreaseButtonClick() {
    this.handleDecreaseButtonClick = (e) => {
      this.update(e.target);
      if (this.value === 0) { return; }
      if (this.value === 1) { 
        this.toggleDecreaseButtonMod(); 
        this.decreaseButtons[this.row].tabIndex = '-1';
      }
      this.changeCounterValue(-1);
      this.updateSignature(this.signatureInterfaces);
      this.countersSum -= 1;
      if (this.countersSum === 0) { this.toggleCancelButtonMod(); }
      this.updateStorage();
    };
  }

  setHandleIncreaseButtonClick() {
    this.handleIncreaseButtonClick = (e) => {
      this.update(e.target);
      if (this.value === 0) { 
        this.toggleDecreaseButtonMod(); 
        this.decreaseButtons[this.row].tabIndex = '0';
      }
      this.changeCounterValue(1);
      this.updateSignature(this.signatureInterfaces);
      this.countersSum += 1;
      if (this.countersSum === 1) { this.toggleCancelButtonMod(); }
      this.updateStorage();
    };
  }

  setHandeApplyButtonClick() {
    this.handeApplyButtonClick = () => {
      this.elemsMap.expandButton
        .classList.toggle(this.mods.expandButtonPressed);
      this.elemsMap.list.classList.toggle(this.mods.listHedden);
      this.updateStorage();
    };
  }

  setHandleCancelButtonClick() {
    this.handleCancelButtonClick = () => {
      this.resetCounters();
      this.countersSum = 0;
      this.elemsMap.signature.innerText = this.defaultSignature;
      this.addDecreseButtonsMod();
      this.toggleCancelButtonMod();
    };
  }

  updateStorage() {
    sessionStorage.setItem(
      this.hash, 
      this.counters.reduce((res, c) => `${res} ${c.innerText}`, '')
    );
  }

  setCounterValues(values) {
    (values.match(/\d+/g) || []).forEach((v, idx) => (
      this.clickOnButtonNthTimes(+v, this.increaseButtons[idx])
    ));
  }

  clickOnButtonNthTimes(n, button) {
    if (n <= 0) { return; }
    button.click();
    this.clickOnButtonNthTimes(--n, button);
  }

  changeCounterValue(diff) {
    return this.counters[this.row].innerText = this.value + diff;
  }

  resetCounters() {
    this.counters.forEach((c) => c.innerText = 0);
  }

  toggleDecreaseButtonMod() {
    this.decreaseButtons[this.row]
      .classList.toggle(this.mods.decreaseButtonDisabled);
  }

  addDecreseButtonsMod() {
    this.decreaseButtons.forEach((b) => (
      b.classList.add(this.mods.decreaseButtonDisabled)
    ));
  }

  toggleCancelButtonMod() {
    if (this.elemsMap.cancelButton) {
      this.elemsMap.cancelButton.classList.toggle(this.mods.cancelButtonHidden);
    }
  }

  updateSignature(interfaces = this.signatureInterfaces) {
    this.elemsMap.signature.innerText = interfaces.reduce((res, i) => {
      const value = i.getValue();
      if (value === 0) { return res; }
      const part = `${value} ${
        this.glossary.getDefinition(i.getName(), value)
      }`;
      return res === '' ? part : `${res}, ${part}`;
    }, '') || this.defaultSignature;
  }

  getRow(button) {
    return Math.max(
      [...this.decreaseButtons].indexOf(button),
      [...this.increaseButtons].indexOf(button),
      0
    );
  }

  update(button) {
    this.row = this.getRow(button);
    this.value = +this.counters[this.row].innerText;
  }
}

export default Dropdown;
