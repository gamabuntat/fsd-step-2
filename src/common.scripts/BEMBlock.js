class BEMBlock {
  constructor(root) {
    this.root = root;
    this.className = this.getBlockClass();
  }

  getBlockClass(block = this.root) {
    return [...block.classList].find((c) => c.startsWith('js-'));
  }

  getElemsMap(...elemNames) {
    return elemNames.reduce((map, name) => {
      map[BEMBlock.kebabToCamel(name)] = this.getElem(name);
      return map;
    }, {});
  }

  getElem(elemName) {
    return this.root.querySelector(`.${this.className}__${elemName}`);
  }

  static kebabToCamel(kebab) {
    return kebab.replace(/-(.)/g, (match, s) => s.toUpperCase());
  }

  static camelToKebab(camel) {
    return camel.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
  }
}

export default BEMBlock;

