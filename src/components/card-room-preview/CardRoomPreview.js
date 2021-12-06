import BEMBlock from '@scripts/BEMBlock.js';

class CardRoomPreview extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap([
      'room-img',
      'next-button',
      'prev-button',
      'wrapper',
      'room-number',
      'cost',
    ]);
    this.setMods(['card-room-preview__room-number_deluxe']);
    this.counter = 0;
    this.step = 270;
    this.nImg = this.root.querySelectorAll(
      this.getElemClass('room-img')
    ).length;
    this.radioInputs = this.root.querySelectorAll(
      this.getElemClass('radio-input')
    );
    this.roomNumber = Number(this.elemsMap.roomNumber.innerText);
    this.isLuxury = this.elemsMap.roomNumber.classList.contains(
      this.mods.roomNumberDeluxe
    );
    this.cost = Number(this.elemsMap.cost.innerText.replace(/\D/g, ''));
    this.setListeners();
    this.bindListeners();
  }

  setListeners() {
    this.setHandleNextButtonClick();
    this.setHandlePrevButtonClick();
    this.setHandleRadioInputChange();
    this.setHandleWrapperClick();
  }

  bindListeners() {
    this.elemsMap.nextButton.addEventListener(
      'click',
      this.handleNextButtonClick
    );
    this.elemsMap.prevButton.addEventListener(
      'click',
      this.handlePrevButtonClick
    );
    this.radioInputs.forEach((ri) =>
      ri.addEventListener('change', this.handleRadioInputChange)
    );
    this.elemsMap.wrapper.addEventListener('click', this.handleWrapperClick);
  }

  setHandleNextButtonClick() {
    this.handleNextButtonClick = () => {
      if (this.counter === this.nImg - 1) {
        return;
      }
      this.counter += 1;
      this.checkInput();
      this.flipImg();
    };
  }

  setHandlePrevButtonClick() {
    this.handlePrevButtonClick = () => {
      if (this.counter === 0) {
        return;
      }
      this.counter -= 1;
      this.checkInput();
      this.flipImg();
    };
  }

  checkInput() {
    this.radioInputs[this.counter].checked = true;
  }

  flipImg() {
    this.elemsMap.roomImg.style.marginLeft = `${-this.step * this.counter}px`;
  }

  setHandleRadioInputChange() {
    this.handleRadioInputChange = (e) => {
      this.counter = Number(e.target.dataset.index);
      this.flipImg();
    };
  }

  setHandleWrapperClick() {
    this.handleWrapperClick = () => {
      sessionStorage.setItem(
        'roomDetails',
        JSON.stringify({
          roomNumber: this.roomNumber,
          cost: this.cost,
          isLuxury: this.isLuxury,
        })
      );
    };
  }
}

export default CardRoomPreview;
