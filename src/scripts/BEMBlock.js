import kebabToCamel from '@scripts/kebabToCamel.js';

class BEMBlock {
  constructor(root) {
    this.root = root;
    this.setClass();
    this.elemsMap = {};
  }

  updateElemsMap(elemNames) {
    this.elemsMap = { ...this.elemsMap, ...this.getElemsMap(elemNames) };
  }

  getElemsMap(elemNames) {
    return elemNames.reduce((map, name) => {
      map[kebabToCamel(name)] = this.findElem(name);
      return map;
    }, {});
  }

  findElem(elemName) {
    return this.root.querySelector(`.${this.rootClass}__${elemName}`);
  }

  setClass() {
    this.rootClass = [...this.root.classList].find((c) => c.startsWith('js-'));
  }
}

export default BEMBlock;

