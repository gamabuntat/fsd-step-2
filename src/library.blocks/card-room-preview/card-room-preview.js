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
}

document.querySelectorAll('.js-card-room-preview')
  .forEach((c) => new CardRoomPreview(c));

