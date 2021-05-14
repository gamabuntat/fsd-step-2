const calcPosition = (x, trackX, shift, trackW) => (
  (x - trackX - shift) / trackW
);

const handlePointerMove = (track) => (state) => (e) => {
  if (!state.getTrigger()) { return; }
  const trackRect = track.getBoundingClientRect();
  const position = Math.min(
    state.b().max, 
    Math.max(
      calcPosition(e.x, trackRect.x, state.getShift(), trackRect.width),
      state.b().min
    )
  );
  e.target.style.left = `${position * 100}%`;
  state.setB(position);
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
  return (type = 'bs') => {
    const extendedI = {
      getTrigger() { return s.isTrigered; },
      getShift() { return s.shift; }
    };
    const interfaces = {
      bs: {
        b() { return s.bs; },
        setB(pos) { s.be.min = pos + getRelBw(); },
        ...extendedI
      },
      be: {
        b() { return s.be; },
        setB(pos) { s.bs.max = pos - getRelBw(); },
        ...extendedI
      },
      t: {
        retrigger() { s.isTrigered = !s.isTrigered; },
        setShift(value) { s.shift = value; },
      },
    };
    return interfaces[type];
  };
};

const bindListeners = (root) => {
  const track = root.querySelector('.js-range-slider__body');
  const bs = root.querySelector('.js-range-slider__button_start-range');
  const be = root.querySelector('.js-range-slider__button_end-range');
  const state = newState()(bs.getBoundingClientRect().width, track);
  [bs, be].forEach((b) => {
    b.addEventListener('pointerdown', handlePointerDown(state('t')));
    b.addEventListener('lostpointercapture', handleLostPointer(state('t')));
  });
  bs.addEventListener(
    'pointermove', handlePointerMove(track)(state('bs'))
  );
  be.addEventListener(
    'pointermove', handlePointerMove(track)(state('be'))
  );
};

document.querySelectorAll('.js-range-slider__container')
  .forEach((root) => bindListeners(root));

