class Tables {
  constructor(tables) {
    this.tables = tables;
    this.index = 0;
    this.rowSize = this.tables[0].rows[0].cells.length;
    this.lastCellIndex = this.rowSize - 1;
  }

  getTables() {
    return this.tables;
  }

  getSize() {
    return this.tables.length;
  }

  decreaseIndex() {
    if (this.index === 0) {
      return;
    }
    this.index -= 1;
  }

  increaseIndex() {
    if (this.index === this.tables.length - 1) {
      return;
    }
    this.index += 1;
  }

  *genCoordsInOrder(coord, reference, compareFunc = () => true) {
    let currentCoord = coord;
    while (compareFunc(currentCoord, reference)) {
      yield currentCoord;
      currentCoord = this.getNextCoord(currentCoord);
    }
  }

  getCoordsForward(coord, n) {
    if (n === 0) {
      return coord;
    }
    return this.getCoordsForward(this.getNextCoord(coord), n - 1);
  }

  getCoordsAgo(coord, n) {
    if (n === 0) {
      return coord;
    }
    return this.getCoordsAgo(this.getPrevCoord(coord), n - 1);
  }

  getLastCellCoord(index) {
    return [index, this.getLastRowIndex(index), 6];
  }

  getLastRowIndex(index) {
    return this.getNRows(index) - 1;
  }

  getElemCoord(elem) {
    return [
      this.index,
      elem.closest('tr').rowIndex,
      elem.closest('td').cellIndex,
    ];
  }

  getCoord(index, nCells) {
    return [
      index,
      Math.floor((nCells - 1) / this.rowSize),
      (nCells - 1) % this.rowSize,
    ];
  }

  getCell(coord) {
    return this.tables[coord[0]]?.rows[coord[1]]?.cells[coord[2]];
  }

  getNextCoord(coord) {
    if (coord[2] < this.lastCellIndex) {
      return [coord[0], coord[1], coord[2] + 1];
    }
    if (this.getCell([coord[0], coord[1] + 1, 0])) {
      return [coord[0], coord[1] + 1, 0];
    }
    return [coord[0] + 1, 0, 0];
  }

  getPrevCoord(coord) {
    if (coord[2] > 0) {
      return [coord[0], coord[1], coord[2] - 1];
    }
    if (coord[1] > 0) {
      return [coord[0], coord[1] - 1, this.lastCellIndex];
    }
    return [
      coord[0] - 1,
      this.getLastRowIndex(coord[0] - 1),
      this.lastCellIndex,
    ];
  }

  getNRows(index) {
    return this.tables[index].rows.length;
  }

  static getMinCoord(coordA, coordB) {
    return Tables.makeUnnumerical(
      Math.min(Tables.makeNumerical(coordA), Tables.makeNumerical(coordB))
    );
  }

  static compareCoord(coordA, coordB) {
    return Tables.makeNumerical(coordA) - Tables.makeNumerical(coordB);
  }

  static isCoordEqual(coord, reference) {
    return Tables.makeNumerical(coord) === Tables.makeNumerical(reference);
  }

  static isCoordMore(coord, reference) {
    return Tables.makeNumerical(coord) > Tables.makeNumerical(reference);
  }

  static isCoordLess(coord, reference) {
    return Tables.makeNumerical(coord) < Tables.makeNumerical(reference);
  }

  static isCoordLessOrEqual(coord, reference) {
    return Tables.makeNumerical(coord) <= Tables.makeNumerical(reference);
  }

  static makeUnnumerical(numericalCoord) {
    return Tables.fillCoord(String(numericalCoord).split('').map(Number));
  }

  static fillCoord(coord, length = coord.length) {
    if (length >= 3) {
      return coord;
    }
    return Tables.fillCoord([0, ...coord], length + 1);
  }

  static makeNumerical(coord) {
    return Number(coord.reduce((res, dimension) => `${res}${dimension}`, ''));
  }
}

export default Tables;
