const calcPosition = (x, trackX, shift, trackW) => (
  (x - trackX - shift) / trackW
);

const handlePointerMoveS = (track) => (state) => (e) => {
  if (!state.getTrigger()) { return; }
  const trackRect = track.getBoundingClientRect();
  const position = Math.min(
    state.bs().max, 
    Math.max(
      calcPosition(e.x, trackRect.x, state.getShift(), trackRect.width),
      state.bs().min
    )
  );
  e.target.style.left = `${position * 100}%`;
  state.setBe(position);
};

const handlePointerMoveE = (track) => (state) => (e) => {
  if (!state.getTrigger()) { return; }
  const trackRect = track.getBoundingClientRect();
  const position = Math.min(
    state.be().max,
    Math.max(
      calcPosition(e.x, trackRect.x, state.getShift(), trackRect.width),
      state.be().min
    )
  );
  e.target.style.left = `${position * 100}%`;
  state.setBs(position);
};

const bindPointer = (elem, id) => elem.setPointerCapture(id);

const handlePointerDown = (state) => (e) => {
  console.log('hi');
  bindPointer(e.target, e.pointerId);
  state.setShift(e.x - e.target.getBoundingClientRect().x);
  state.retrigger();
};

const handleLostPointer = (state) => () => state.retrigger();

const newState = (s = {
  isTrigered: false,
  shift: 0,
  bs: { max: 1, min: 0 },
  be: { max: 1, min: 0 },
}) => (bw, track) => {
  const getTrackW = () => track.getBoundingClientRect().width;
  const getRelBw = () => bw / getTrackW();
  const updateExtrems = () => {
    s.bs.max = 1 - getRelBw() * 2;
    s.be.max = 1 - getRelBw();
    s.be.min = getRelBw();
  };
  updateExtrems();
  return {
    bw() { return bw; },
    getTrigger() { return s.isTrigered; },
    retrigger() { s.isTrigered = !s.isTrigered; },
    getShift() { return s.shift; },
    setShift(value) { s.shift = value; },
    bs() { return s.bs; },
    be() { return s.be; },
    setBs(pos) { s.bs.max = pos - getRelBw(); },
    setBe(pos) { s.be.min = pos + getRelBw(); },
  };
};

const bindListeners = (root) => {
  const track = root.querySelector('.js-range-slider__body');
  const bs = root.querySelector('.js-range-slider__button_start-range');
  const be = root.querySelector('.js-range-slider__button_end-range');
  const state = newState()(
    bs.getBoundingClientRect().width, track
  );
  [bs, be].forEach((b) => {
    b.addEventListener('pointerdown', handlePointerDown(state));
    b.addEventListener('lostpointercapture', handleLostPointer(state));
  });
  bs.addEventListener('pointermove', handlePointerMoveS(track)(state));
  be.addEventListener('pointermove', handlePointerMoveE(track)(state));
};

document.querySelectorAll('.js-range-slider__container')
  .forEach((root) => bindListeners(root));

