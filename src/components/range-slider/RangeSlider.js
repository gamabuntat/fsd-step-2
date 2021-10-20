import BEMBlock from '@scripts/BEMBlock.js';

class RangeSlider extends BEMBlock {
  constructor(root) {
    super(root);
    this.init();
  }

  init() {
    this.updateElemsMap(['container']);
    this.handles = [...document.querySelectorAll('.js-range-slider__handle')];
    this.progressBars = document
      .querySelectorAll('.js-range-slider__progress-bar');
    this.dataAttrs = ['from', 'to'];
    this.positions = this.dataAttrs
      .map((data) => Number(this.root.dataset[data]));
    this.shift = 0;
    this.trigger = true;
    this.setListeners();
    this.handles.map((h, idx) => this.moveResize(this.positions[idx], idx));
    this.bindListeners();
    this.trigger = false;
  }

  setListeners() {
    this.setHandleHandlePointerdown();
    this.setHandleHandleLostpointercapture();
    this.setHandleHandlePointermove();
  }

  bindListeners() {
    this.handles.forEach((h) => {
      h.addEventListener('pointerdown', this.handleHandlePointerdown);
      h.addEventListener(
        'lostpointercapture',
        this.handleHandleLostpointercapture
      );
      h.addEventListener('pointermove', this.handleHandlePointermove);
    });
  }

  setHandleHandlePointerdown() {
    this.handleHandlePointerdown = (e) => {
      this.bindPointer(e.target, e.pointerId);
      this.shift = e.x - e.target.getBoundingClientRect().x;
      this.trigger = true;
    };
  }

  setHandleHandleLostpointercapture() {
    this.handleHandleLostpointercapture = () => {
      this.trigger = false;
    };
  }

  setHandleHandlePointermove() {
    this.handleHandlePointermove = (e) => {
      if (!this.trigger) { return; }
      const handleIDX = this.handles.indexOf(e.target);
      const position = this.calcPosition(
        ...this.selectExtremums(handleIDX),
        e.x,
        this.getOffset(e.target)
      );
      this.updatePosition(position, handleIDX);
      this.updateDataAttr(position, handleIDX);
      this.moveResize(position, handleIDX);
    };
  }

  moveResize(position, idx) {
    this.moveHandle(position, idx);
    this.resizeProgressBar(position, idx);
  }

  calcPosition(min, max, x, offset) {
    const rect = this.elemsMap.container.getBoundingClientRect();
    return Math.min(
      max, 
      Math.max(
        min,
        (x - rect.x - this.shift - offset) / rect.width
      )
    );
  }

  selectExtremums(idx) {
    const preExtremums = [idx, this.positions[1 - idx]];
    return idx === 0 
      ? preExtremums
      : preExtremums.reverse();
  }

  updatePosition(position, idx) {
    this.positions[idx] = position;
  }

  updateDataAttr(position, idx) {
    this.root.dataset[this.dataAttrs[idx]] = String(position);
  }

  moveHandle(position, idx) {
    this.handles[idx].style.left = `${position * 100}%`;
  }

  resizeProgressBar(position, idx) {
    this.progressBars[idx].style.width = `${(Math.abs(idx - position)) * 100}%`;
  }

  getOffset(handle) {
    return new DOMMatrix(getComputedStyle(handle).transform).e;
  }

  bindPointer(handle, pointerId) {
    handle.setPointerCapture(pointerId);
  }
}

export { RangeSlider };

