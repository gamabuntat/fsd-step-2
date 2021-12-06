import kebabToCamel from '@scripts/kebabToCamel.js';

class BEMBlock {
  constructor(root) {
    this.root = root;
    this.setClass();
    this.elemsMap = {};
    this.mods = {};
  }

  updateElemsMap(elemNames) {
    this.elemsMap = { ...this.elemsMap, ...this.getElemsMap(elemNames) };
  }

  getElemsMap(elemNames) {
    return elemNames.reduce(
      (map, name) => ({ ...map, [kebabToCamel(name)]: this.findElem(name) }),
      {}
    );
  }

  setMods(mods) {
    this.mods = mods.reduce(
      (newMods, mode) => ({
        ...newMods,
        [kebabToCamel(mode.replace(/.*__/, '').replace(/_/g, '-'))]: mode,
      }),
      {}
    );
  }

  getElemClass(elemName) {
    return `.${this.rootClass}__${elemName}`;
  }

  findElem(elemName) {
    return this.root.querySelector(this.getElemClass(elemName));
  }

  setClass() {
    this.rootClass = [...this.root.classList].find((c) => c.startsWith('js-'));
  }
}

export default BEMBlock;
