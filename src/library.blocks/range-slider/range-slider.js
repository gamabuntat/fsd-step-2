const iff = (predicate, fn) => (...args) => predicate() && fn(...args);
const pipe = (...fns) => fns.reduceRight((a, b) => (...args) => a(b(...args)));

const resizeBar = (bar, state) => () => (
  bar.style.width = `${
    (state.pb() + state.getRelBw() / 2) * 100 / state.getRatio() 
  }%`
);

const calcPosition = (container, state) => (e) => {
  const rect = container.getBoundingClientRect();
  return (e.x - rect.x - state.getShift() + state.b().offset) / rect.width;
};

const moveButton = (btn, state) => (preposition) => {
  const position = Math.min(
    state.b().max, Math.max(preposition, state.b().min)
  );
  btn.style.left = `${position * 100}%`;
  state.setB(position);
  return position;
};

const bindPointer = (elem, id) => elem.setPointerCapture(id);

const handlePointerDown = (state) => (e) => {
  bindPointer(e.target, e.pointerId);
  state.setShift(e.x - e.target.getBoundingClientRect().x);
  state.retrigger();
};

const handleLostPointer = (state) => () => state.retrigger();

const newState = (bw, track) => {
  const s = {
    isTrigered: false,
    shift: 0,
    stretchRatio: 1,
    bs: { max: 1, min: 0, offset: bw },
    be: { max: 1, min: 0, offset: 0 },
  };
  const getRelBw = () => bw / track.getBoundingClientRect().width;
  const setStretchRatio = (relBw) => (s.stretchRatio = 1 + relBw * 2);
  const transformTrack = (ratio = s.stretchRatio) => (
    track.style.transform = `scale(${ratio})`
  );
  transformTrack(1); 
  setStretchRatio(getRelBw());
  transformTrack();
  return (type = 'bs') => {
    const extendedButtonI = {
      getTrigger() { return s.isTrigered; },
      getShift() { return s.shift; }
    };
    const extendedPBI = {
      getRatio() { return s.stretchRatio; },
      getRelBw() { return getRelBw(); },
    };
    return {
      bs: {
        b() { return s.bs; },
        setB(pos) { s.be.min = pos; },
        ...extendedButtonI
      },
      be: {
        b() { return s.be; },
        setB(pos) { s.bs.max = pos; },
        ...extendedButtonI
      },
      pbs: {
        pb() { return s.be.min; },
        ...extendedPBI
      },
      pbe: {
        pb() { return 1 - s.bs.max; },
        ...extendedPBI
      },
      t: {
        retrigger() { s.isTrigered = !s.isTrigered; },
        setShift(value) { s.shift = value; },
      },
    }[type];
  };
};

const bindListeners = (root) => {
  const container = root.querySelector('.js-range-slider__container');
  const track = root.querySelector('.js-range-slider__body');
  const bs = root.querySelector('.js-range-slider__button_start-range');
  const be = root.querySelector('.js-range-slider__button_end-range');
  const pbs = root.querySelector('.js-range-slider__progress-bar_start');
  const pbe = root.querySelector('.js-range-slider__progress-bar_end');
  const state = newState(bs.getBoundingClientRect().width, track);
  const {bsp, bep} = root.dataset;
  const moveHandlerS = pipe(
    calcPosition(container, state('bs')),
    moveButton(bs, state('bs')),
    (pos) => root.dataset.bsp = pos,
    resizeBar(pbs, state('pbs'))
  );
  const moveHandlerE = pipe(
    calcPosition(container, state('be')),
    moveButton(be, state('be')),
    (pos) => root.dataset.bep = pos,
    resizeBar(pbe, state('pbe'))
  );
  pipe(moveButton(bs, state('bs')), resizeBar(pbs, state('pbs')))(bsp);
  pipe(moveButton(be, state('be')), resizeBar(pbe, state('pbe')))(bep);
  [bs, be].forEach((b) => {
    b.addEventListener('pointerdown', handlePointerDown(state('t')));
    b.addEventListener('lostpointercapture', handleLostPointer(state('t')));
  });
  bs.addEventListener('pointermove', iff(state().getTrigger, moveHandlerS));
  be.addEventListener('pointermove', iff(state().getTrigger, moveHandlerE));
};

document.querySelectorAll('.js-range-slider')
  .forEach((root) => bindListeners(root));

