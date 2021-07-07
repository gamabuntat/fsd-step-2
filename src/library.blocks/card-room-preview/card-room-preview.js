class CardRoomPreview {
  constructor(root) {
    this.root = root;
    this.c = [...this.root.classList].find((c) => c.startsWith('js'));
    this.counter = 0;
    this.step = 270;
    this.roomImg = this.getElem('room-img');
    this.nImg = this.root.querySelectorAll(this.getClass('room-img')).length;
    this.radioInputs = this.root.querySelectorAll(this.getClass('radio-input'));
    this.nextButton = this.getElem('next-button');
    this.prevButton = this.getElem('prev-button');
    this.wrapper = this.getElem('wrapper');
    const roomNumberElem = this.getElem('room-number');
    this.roomNumber = +roomNumberElem.innerText;
    this.isLuxury = roomNumberElem
      .classList.contains('card-room-preview__room-number_deluxe');
    this.cost = +this.getElem('cost').innerText.replace(/\D/g, '');
    this.bindListeners();
  }

  getElem(elem) {
    return this.root.querySelector(this.getClass(elem));
  }

  getClass(elem) {
    return `.${this.c}__${elem}`;
  }

  bindListeners() {
    this.nextButton
      .addEventListener('click', () => this.hadleNextButtonClick());
    this.prevButton
      .addEventListener('click', () => this.hadlePrevButtonClick());
    this.radioInputs.forEach((ri) => (
      ri.addEventListener('change', (e) => this.handleRadioInputChange(e))
    ));
    this.wrapper.addEventListener('click', () => this.handleWrapperClick());
  }

  hadleNextButtonClick() {
    if (this.counter === this.nImg - 1) { return; }
    this.counter += 1;
    this.checkInput();
    this.flipImg();
  }

  hadlePrevButtonClick() {
    if (this.counter === 0) { return; }
    this.counter -= 1;
    this.checkInput();
    this.flipImg();
  }

  checkInput() {
    this.radioInputs[this.counter].checked = true;
  }

  flipImg() {
    this.roomImg.style.marginLeft = `${-this.step * this.counter}px`;
  }

  handleRadioInputChange(e) {
    this.counter = +e.target.dataset.index;
    this.flipImg();
  }

  handleWrapperClick() {
    sessionStorage.setItem('roomDetails', JSON.stringify({
      roomNumber: this.roomNumber,
      cost: this.cost,
      isLuxury: this.isLuxury
    }));
  }
}

document.querySelectorAll('.js-card-room-preview')
  .forEach((c) => new CardRoomPreview(c));

