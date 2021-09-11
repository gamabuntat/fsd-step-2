import kebabToCamel from '@scripts/kebabToCamel.js';

class BEMBlock {
  constructor(root) {
    this.root = root;
    this.className = this.getBlockClass();
    this.elemsMap = {};
  }

  updateElemsMap(elemNames) {
    this.elemsMap = { ...this.elemsMap, ...this.getElemsMap(elemNames) };
  }

  getElemsMap(elemNames) {
    return elemNames.reduce((map, name) => {
      map[kebabToCamel(name)] = this.getElem(name);
      return map;
    }, {});
  }

  getElem(elemName) {
    return this.root.querySelector(`.${this.className}__${elemName}`);
  }

  getBlockClass(block = this.root) {
    return [...block.classList].find((c) => c.startsWith('js-'));
  }
}

export default BEMBlock;

