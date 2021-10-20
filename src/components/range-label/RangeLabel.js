import BEMBlock from '@scripts/BEMBlock.js';
import calcDecimalPlaces from '@scripts/calcDecimalPlaces.js';

class RangeLable extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    const { sliderId, lang, formaterOpt, max, min, step } = this.root.dataset;
    this.slider = document.getElementById(sliderId);
    this.updateElemsMap(['start', 'end']);
    this.observer = new MutationObserver(
      this.handleSliderChangeAttrs.bind(this)
    );
    this.observer.observe(this.slider, { attributes: true });
    this.formater = new Intl.NumberFormat(
      lang, 
      {
        maximumFractionDigits: calcDecimalPlaces(
          Number(step)
        ),
        minimumFractionDigits: 0,
        ...formaterOpt 
          ? JSON.parse(formaterOpt) 
          : {
            style: 'currency',
            currency: 'RUB',
          }
      }
    );
    this.max = Number(max);
    this.min = Number(min);
    this.step = Number(step);
    this.handleSliderChangeAttrs();
  }

  handleSliderChangeAttrs() {
    this.updateStartValue(
      this.format(
        this.calcValue(this.slider.dataset.from)
      )
    );
    this.updateEndValue(
      this.format(
        this.calcValue(this.slider.dataset.to)
      )
    );
  }

  updateStartValue(value) {
    this.elemsMap.start.innerText = value;
  }

  updateEndValue(value) {
    this.elemsMap.end.innerText = value;
  }

  format(preValue) {
    return this.formater.format(preValue).replace(/\s(?!\d)/, '');
  }

  calcValue(pos) {
    return Math.min(
      this.max,
      Math.floor(pos * (this.max - this.min + this.step) / this.step) 
      * this.step + this.min
    );
  }
}

export default RangeLable;

