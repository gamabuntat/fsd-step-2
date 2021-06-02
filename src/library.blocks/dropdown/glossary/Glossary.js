class Glossary {
  constructor(glossary = {}) {
    this.glossary = glossary;
    this.terms = Object.keys(glossary);
  }

  static checkForm1(digit) {
    return digit === 1;
  }

  static checkForm2(digit) {
    return digit > 1 && digit < 5;
  }

  static checkForm3(digit, n) {
    return (digit === 0 || digit > 4) || (n > 9 && n < 20);
  }

  static compare(searchWord, term) {
    return term.trim().split('+').find((t) => t === searchWord);
  }

  defineShape(n) {
    const lastDigit = +String(n).slice(-1);
    return [
      Glossary.checkForm1(lastDigit),
      Glossary.checkForm2(lastDigit),
      Glossary.checkForm3(lastDigit, +String(n).slice(-2))
    ].lastIndexOf(true);
  }

  findTerm(word) {
    return this.terms.find(Glossary.compare.bind(null, word));
  }

  getDefinition(testWord, numeral) {
    return (
      this.glossary[this.findTerm(testWord)] || []
    )[this.defineShape(numeral)] || testWord;
  }
}

export default Glossary;

