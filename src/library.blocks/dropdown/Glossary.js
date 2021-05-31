class Glossary {
  constructor(glossary = {}) {
    this.glossary = glossary;
    this.terms = Object.keys(glossary);
  }

  static compare(searchWord, term) {
    return term.trim().split(', ').find((t) => t === searchWord);
  }

  static fixValue(value) {
    return value === 1 
      ? 0
      : value > 1 && value < 5
        ? 1
        : 2;
  }

  findTerm(word) {
    return this.terms.find(Glossary.compare.bind(null, word));
  }

  getDefinition(testWord, value) {
    return (
      this.glossary[this.findTerm(testWord)] || []
    )[Glossary.fixValue(value)];
  }
}

export default Glossary;

