import './__input/room-card__input.js';

export const nameSpace = {
  width: 271,
  number: 4,
  setMaxWidth() {
    this.maxWidth = this.width * this.number - this.width;
  },

  getPosition(x) {
    return Math.abs(x / this.width) + 1;
  },
  getRoomCard(elem) {
    while (!elem.classList.contains('room-card') && elem != document.body) {
      elem = elem.parentElement; 
    }
    return elem;

  },
  checkInput(elem, x) {
    const roomCard = this.getRoomCard(elem);
    const position = this.getPosition(x);
    const inputs = roomCard.querySelectorAll('input');
    inputs[position - 1].checked = true;
  },
};

nameSpace.setMaxWidth();

