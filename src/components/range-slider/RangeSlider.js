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
  constructor(root) {
    super(root.querySelector('.js-rs__progress-bar--end'));
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
  constructor(root) {
    const handleStart = root.querySelector('.js-rs__handle--start');
    super(handleStart, parseInt(getComputedStyle(handleStart).width));
  }

  updateExtremum(position) {
    this.setMax(position);
  }
}

class HandleEnd extends Handle {
  constructor(root) {
    super(root.querySelector('.js-rs__handle--end'), 0);
  }

  updateExtremum(position) {
    this.setMin(position);
  }
}

class RangeSlider {
  constructor(root) {
    this.rs = root;
    this.container = root.querySelector('.js-rs__container');
    this.handleStart = new HandleStart(root);
    this.handleEnd = new HandleEnd(root);
    this.progressBarStart = new ProgressBar(
      root.querySelector('.js-rs__progress-bar--start')
    );
    this.progressBarEnd = new ProgressBarEnd(root);
    this.dataAttrStart = 'hsp';
    this.dataAttrEnd = 'hep';
    this.trigger = false;
    this.shift = 0;
    this.bindListeners();
    this.init();
  }

  init() {
    this.makeMoveThenResizeThenUpdateFunc(
      this.handleStart,
      this.progressBarStart,
      this.dataAttrStart,
      this.handleEnd
    )(+this.rs.dataset.hsp);
    this.makeMoveThenResizeThenUpdateFunc(
      this.handleEnd,
      this.progressBarEnd,
      this.dataAttrEnd,
      this.handleStart
    )(+this.rs.dataset.hep);
  }

  bindListeners() {
    [this.handleStart, this.handleEnd].forEach((h) => ( 
      h.handle.addEventListener(
        'pointerdown', (e) => this.handleHandlePointerdown(e)
      ),
      h.handle.addEventListener(
        'lostpointercapture', () => this.handleHandleLostpointercapture()
      )
    ));
    this.handleStart.handle.addEventListener(
      'pointermove',
      this.handleHandlePointermove.bind(
        this,
        this.handleStart,
        this.handleEnd,
        this.progressBarStart,
        this.dataAttrStart,
      )
    );
    this.handleEnd.handle.addEventListener(
      'pointermove',
      this.handleHandlePointermove.bind(
        this,
        this.handleEnd,
        this.handleStart,
        this.progressBarEnd,
        this.dataAttrEnd
      )
    );
  }

  handleHandlePointerdown(e) {
    this.bindPointer(e.target, e.pointerId);
    this.shift = e.x - e.target.getBoundingClientRect().x;
    this.trigger = true;
  }

  handleHandleLostpointercapture() {
    this.trigger = false;
  }

  handleHandlePointermove(
    handle,
    anotherHandle,
    progressBar,
    dataAttr,
    e
  ) {
    if (!this.trigger) { return; }
    this.makeMoveThenResizeThenUpdateFunc(
      handle, progressBar, dataAttr, anotherHandle
    )(
      this.calcPosition(handle, e)
    );
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
        this.rs.dataset[dataAttr] = position;
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

