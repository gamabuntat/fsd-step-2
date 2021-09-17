import pipe from '@scripts/pipe.js';

class ProgressBar {
  constructor(progressBar) {
    this.progressBar = progressBar;
  }

  resize(position) {
    this.progressBar.style.width = `${position * 100}%`;
  }
}

class ProgressBarEnd extends ProgressBar {
  constructor(progressBar) {
    super(progressBar);
  }

  resize(position) {
    this.progressBar.style.width = `${(1 - position) * 100}%`;
  }
}

class Handle {
  constructor(handle, offset) {
    this.max = 1;
    this.min = 0;
    this.offset = offset;
    this.handle = handle;
  }

  setMax(newMax) { this.max = newMax; }

  setMin(newMin) { this.min = newMin; }

  move(position) {
    this.handle.style.left = `${position * 100}%`;
  }
}

class HandleStart extends Handle {
  constructor(handle) {
    super(handle, parseInt(getComputedStyle(handle).width));
  }

  updateExtremum(position) {
    this.setMax(position);
  }
}

class HandleEnd extends Handle {
  constructor(handle) {
    super(handle, 0);
  }

  updateExtremum(position) {
    this.setMin(position);
  }
}

class RangeSlider {
  constructor(root) {
    this.root = root;
    this.init();
  }

  init() {
    this.container = this.root.querySelector('.js-range-slider__container');
    this.handleStart = new HandleStart(
      this.root.querySelector('.js-range-slider__handle--start')
    );
    this.handleEnd = new HandleEnd(
      this.root.querySelector('.js-range-slider__handle--end')
    );
    this.progressBarStart = new ProgressBar(
      this.root.querySelector('.js-range-slider__progress-bar--start')
    );
    this.progressBarEnd = new ProgressBarEnd(
      this.root.querySelector('.js-range-slider__progress-bar--end')
    );
    this.dataAttrStart = 'hsp';
    this.dataAttrEnd = 'hep';
    this.trigger = false;
    this.shift = 0;
    this.setListeners();
    this.bindListeners();
    this.makeMoveThenResizeThenUpdateFunc(
      this.handleStart,
      this.progressBarStart,
      this.dataAttrStart,
      this.handleEnd
    )(Number(this.root.dataset.hsp));
    this.makeMoveThenResizeThenUpdateFunc(
      this.handleEnd,
      this.progressBarEnd,
      this.dataAttrEnd,
      this.handleStart
    )(Number(this.root.dataset.hep));
  }

  setListeners() {
    this.setHandleHandlePointerdown();
    this.setHandleHandleLostpointercapture();
  }

  bindListeners() {
    [this.handleStart, this.handleEnd].forEach((h) => ( 
      h.handle.addEventListener('pointerdown', this.handleHandlePointerdown),
      h.handle.addEventListener(
        'lostpointercapture', this.handleHandleLostpointercapture
      )
    ));
    this.handleStart.handle.addEventListener(
      'pointermove',
      this.handleHandleStartPointermove = this.makeHandleHandlePointermove(
        this.handleStart,
        this.handleEnd,
        this.progressBarStart,
        this.dataAttrStart,
      )
    );
    this.handleEnd.handle.addEventListener(
      'pointermove',
      this.handleHandleEndPointermove = this.makeHandleHandlePointermove(
        this.handleEnd,
        this.handleStart,
        this.progressBarEnd,
        this.dataAttrEnd
      )
    );
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

  makeHandleHandlePointermove(
    handle,
    anotherHandle,
    progressBar,
    dataAttr,
  ) {
    return (e) => {
      if (!this.trigger) { return; }
      this.makeMoveThenResizeThenUpdateFunc(
        handle, progressBar, dataAttr, anotherHandle
      )(
        this.calcPosition(handle, e)
      );
    };
  }

  makeMoveThenResizeThenUpdateFunc(
    handle,
    progressBar,
    dataAttr,
    anotherHandle
  ) {
    return pipe(
      (position) => {
        handle.move(position);
        return position;
      },
      (position) => {
        progressBar.resize(position);
        return position;
      },
      (position) => {
        this.root.dataset[dataAttr] = position;
        return position;
      },
      (position) => anotherHandle.updateExtremum(position)
    );
  }

  calcPosition(handle, e) {
    const containerRect = this.container.getBoundingClientRect();
    return Math.min(
      handle.max, 
      Math.max(
        handle.min,
        (e.x - containerRect.x - this.shift + handle.offset) 
          / containerRect.width
      )
    );
  }

  bindPointer(handle, pointerId) {
    handle.setPointerCapture(pointerId);
  }
}

export { RangeSlider };

