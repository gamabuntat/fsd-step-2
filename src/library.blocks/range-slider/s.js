const iff = (predicate, fn) => (...args) => predicate() && fn(...args);
const pipe = (...fns) => fns.reduceRight((a, b) => (...args) => a(b(...args)));

const resizeBar = (bar, state) => () => (
  bar.style.width = `${
    (state.pb() + state.getRelBw() / 2) * 100 / state.getRatio() 
  }%`
);

const changeDisplayValue = (display, min, max) => (position) => (
  display.innerText = String((max - min) * position + min)
);

const moveButton = (btn, state) => (preposition) => {
  const position = Math.min(
    state.b().max, Math.max(preposition, state.b().min)
  );
  btn.style.left = `${position * 100}%`;
  state.setB(position);
  return position;
};

const calcPosition = (container, state) => (e) => {
  const rect = container.getBoundingClientRect();
  return (e.x - rect.x - state.getShift() + state.b().offset) / rect.width;
};

const reverseCalcPosition = (min, max, bp) => (
  (bp - min) / (max - min)
);

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
  const setTrackStretchRatio = () => (
    transformTrack(1), setStretchRatio(getRelBw())
  );
  setTrackStretchRatio();
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
  const container = root.querySelector('.js-range-slider__sub-container');
  const track = root.querySelector('.js-range-slider__body');
  const bs = root.querySelector('.js-range-slider__button_start-range');
  const be = root.querySelector('.js-range-slider__button_end-range');
  const pbs = root.querySelector('.js-range-slider__progress-bar_start');
  const pbe = root.querySelector('.js-range-slider__progress-bar_end');
  const ds = root.querySelector('.js-range-slider__price_from');
  const de = root.querySelector('.js-range-slider__price_to');
  const state = newState(bs.getBoundingClientRect().width, track);
  const {bsp, bep, minV, maxV} = Object.entries(root.dataset)
    .reduce((acc, i) => {
      const o = {};
      o[i[0]] = Number(i[1]);
      return {...acc, ...o};
    }, {});
  const moveHandlerS = pipe(
    calcPosition(container, state('bs')),
    moveButton(bs, state('bs')),
    changeDisplayValue(ds, minV, maxV),
    resizeBar(pbs, state('pbs'))
  );
  const moveHandlerE = pipe(
    calcPosition(container, state('be')),
    moveButton(be, state('be')),
    changeDisplayValue(de, minV, maxV),
    resizeBar(pbe, state('pbe'))
  );
  pipe(
    reverseCalcPosition,
    moveButton(bs, state('bs')),
    resizeBar(pbs, state('pbs'))
  )(minV, maxV, bsp);
  pipe(
    reverseCalcPosition, 
    moveButton(be, state('be')),
    resizeBar(pbe, state('pbe'))
  )(minV, maxV, bep);
  [bs, be].forEach((b) => {
    b.addEventListener('pointerdown', handlePointerDown(state('t')));
    b.addEventListener('lostpointercapture', handleLostPointer(state('t')));
  });
  bs.addEventListener('pointermove', iff(state().getTrigger, moveHandlerS));
  be.addEventListener('pointermove', iff(state().getTrigger, moveHandlerE));
};

document.querySelectorAll('.js-range-slider')
  .forEach((root) => bindListeners(root));

