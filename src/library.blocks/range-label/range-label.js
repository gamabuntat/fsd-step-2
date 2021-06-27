class RangeLable {
  constructor(root) {
    this.slider = document.getElementById(root.dataset.sliderId);
    if (!this.slider) { return; }
    this.start = root.querySelector('.range-label__start');
    this.end = root.querySelector('.range-label__end');
    this.observer = new MutationObserver(
      this.handleSliderChangeAttrs.bind(this)
    );
    this.observer.observe(this.slider, { attributes: true });
    this.formater = new Intl.NumberFormat(
      root.dataset.formaterLang, 
      {
        ...root.dataset.formaterOpt 
          ? JSON.parse(root.dataset.formaterOpt) 
          : {
            style: 'currency',
            currency: 'RUB',
          },
        maximumFractionDigits: RangeLable.calcDecimalPlaces(+root.dataset.step),
        minimumFractionDigits: 0
      }
    );
    const data = root.dataset;
    this.max = +data.max;
    this.min = +data.min;
    this.step = +data.step;
    this.handleSliderChangeAttrs();
  }

  handleSliderChangeAttrs() {
    console.log(this.slider.dataset.bsp);
    this.updateStartValue(
      this.format(
        this.calcValue(this.slider.dataset.bsp)
      )
    );
    this.updateEndValue(
      this.format(
        this.calcValue(this.slider.dataset.bep)
      )
    );
  }

  updateStartValue(value) {
    this.start.innerText = value;
  }

  updateEndValue(value) {
    this.end.innerText = value;
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

  static calcDecimalPlaces(n) {
    const sn = String(n);
    const pointIndex = sn.indexOf('.');
    console.log(pointIndex);
    return pointIndex === -1 ? 0 : sn.slice(pointIndex + 1).length;
  }
}

document.querySelectorAll('.range-label').forEach((rl) => new RangeLable(rl));

