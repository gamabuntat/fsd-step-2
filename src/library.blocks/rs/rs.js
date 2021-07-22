class Handle {
  constructor(handle, offset) {
    this.max = 1;
    this.min = 0;
    this.offset = offset;
    this.handle = handle;
  }

  setMax(newMax) { this.max = newMax; }
  setMin(newMin) { this.min = newMin; }
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

class Rs {
  constructor(root) {
    this.container = root.querySelector('.js-rs__container');
    this.handleStart = new HandleStart(root);
    this.handleEnd = new HandleEnd(root);
    this.trigger = false;
    this.shift = 0;
    this.bindListeners();
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
      this.handleHandlePointermove.bind(this, this.handleStart, this.handleEnd)
    );
    this.handleEnd.handle.addEventListener(
      'pointermove',
      this.handleHandlePointermove.bind(this, this.handleEnd, this.handleStart)
    );
  }

  handleHandlePointerdown(e) {
    Rs.bindPointer(e.target, e.pointerId);
    this.shift = e.x - e.target.getBoundingClientRect().x;
    this.trigger = true;
  }

  handleHandleLostpointercapture() {
    this.trigger = false;
  }

  handleHandlePointermove(handle, anotherHandle, e) {
    if (!this.trigger) { return; }
    const position = Math.min(
      handle.max, Math.max(handle.min, this.calcPosition(handle, e))
    );
    handle.handle.style.left = `${position * 100}%`;
    anotherHandle.updateExtremum(position);
  }

  calcPosition(handle, e) {
    const containerRect = this.container.getBoundingClientRect();
    return (e.x - containerRect.x - this.shift + handle.offset) 
      / containerRect.width;
  }

  static bindPointer(handle, pointerId) {
    handle.setPointerCapture(pointerId);
  }
}

document.querySelectorAll('.js-rs')
  .forEach((rs) => new Rs(rs));

