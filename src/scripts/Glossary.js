class Glossary {
  constructor(glossary = {}) {
    this.glossary = glossary;
    this.terms = Object.keys(glossary);
  }

  getDefinition(testWord, numeral) {
    return (
      this.glossary[this.findTerm(testWord)] || []
    )[this.defineShape(numeral)] || testWord;
  }

  findTerm(word) {
    return this.terms.find(Glossary.compare.bind(null, word));
  }

  defineShape(n) {
    const lastDigit = +String(n).slice(-1);
    return [
      Glossary.checkForm1(lastDigit),
      Glossary.checkForm2(lastDigit),
      Glossary.checkForm3(lastDigit, +String(n).slice(-2))
    ].lastIndexOf(true);
  }

  static compare(searchWord, term) {
    return term.trim().split('+').find((t) => t === searchWord);
  }

  static checkForm1(digit) {
    return digit === 1;
  }

  static checkForm2(digit) {
    return digit > 1 && digit < 5;
  }

  static checkForm3(digit, last2digits) {
    return (digit === 0 || digit > 4) || (last2digits > 9 && last2digits < 20);
  }

  static create(searchTerms, glossaries) {
    return new Glossary(
      Object.values(glossaries).find((g) => (
        Object.keys(g).filter((term) => searchTerms.indexOf(term) === -1)
          .length == 0
      ))
    );
  }
}

export default Glossary;

