class Cal {
  constructor(root) {
    this.tableContainer = root.querySelector('.js-cal__table-container');
    this.template = this.tableContainer.innerHTML;
    this.tables = root.getElementsByClassName('js-cal__main-table');
    this.firstTable = this.tables[0];
    this.step = this.tableContainer.getBoundingClientRect().width;
    this.index = 0;
    const now = new Date(root.dataset.date);
    this.year = now.getFullYear();
    this.month = now.getMonth();
  }

  static getTail(list) {
    return [...list].pop();
  }

  static getLastN(number) {
    return +Cal.getTail(String(number));
  }

  static makeNumerical(coord) {
    return +coord.reduce((res, dimension) => res + dimension, '');
  }

  static isCoordLessOrEqual(coord, reference) {
    return Cal.makeNumerical(coord) <= Cal.makeNumerical(reference);
  }

  static increaseAny(any, notation, n) {
    return Number(
      String(Math.floor((any + n) / notation)) 
      + String((any + n) % notation)
    );
  }

  static increaseCoord(coord, n) {
    const c = Cal.increaseAny(coord[2], 7, n);
    const r = Cal.increaseAny(coord[1], 6, Math.floor(c / 10));
    return [
      Math.floor(r / 10) + coord[0], 
      Cal.getLastN(r), 
      Cal.getLastN(c)
    ];
  }

  static * genCoordsInOrder(coord, reference) {
    let currentCoord = coord;
    while (Cal.isCoordLessOrEqual(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = Cal.increaseCoord(currentCoord, 1);
    }
  }
}

document.querySelectorAll('.js-cal').forEach((cal) => new Cal(cal));

