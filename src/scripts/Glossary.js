import findLastIndex from '@scripts/findLastIndex.js';

class Glossary {
  constructor(glossary = {}) {
    this.glossary = glossary;
    this.terms = Object.keys(glossary);
  }

  getDefinition(testWord, numeral) {
    return (
      (this.glossary[this.findTerm(testWord)] || [])[
        Glossary.defineShape(numeral)
      ] || testWord
    );
  }

  findTerm(word) {
    return this.terms.find((term) =>
      term
        .trim()
        .split('+')
        .find((t) => t === word)
    );
  }

  static defineShape(n) {
    return findLastIndex(Array(3).fill(n), Glossary.predicate);
  }

  static predicate(item, idx) {
    return [Glossary.checkForm1, Glossary.checkForm2, Glossary.checkForm3][idx](
      item
    );
  }

  static checkForm1(n) {
    return Glossary.getLastDigits(n) === 1;
  }

  static checkForm2(n) {
    const lastDigit = Glossary.getLastDigits(n);
    return lastDigit > 1 && lastDigit < 5;
  }

  static checkForm3(n) {
    const lastDigit = Glossary.getLastDigits(n);
    const last2digits = Glossary.getLastDigits(n, 2);
    return (
      lastDigit === 0 || lastDigit > 4 || (last2digits > 9 && last2digits < 20)
    );
  }

  static getLastDigits(number, endCount = 1) {
    return Number(String(number).slice(-endCount));
  }

  static create(searchTerms, glossaries) {
    return new Glossary(
      Object.values(glossaries).find(
        (g) =>
          Object.keys(g).filter((term) => searchTerms.indexOf(term) === -1)
            .length == 0
      )
    );
  }
}

export default Glossary;
