const slider = document.querySelector('.range-slider__container');
const sliderButtonStart = (
  document.querySelector('.range-slider__button_start-range')
);
const sliderButtonEnd = (
  document.querySelector('.range-slider__button_end-range')
);
const startRange = slider.querySelector('.range-slider__start-range');
const endRange = slider.querySelector('.range-slider__end-range');
const priceFrom = document.querySelector('.range-slider__price_from');
const priceTo = document.querySelector('.range-slider__price_to');

const buttonWidth = sliderButtonStart.getBoundingClientRect().width;
const sliderWidth = slider.getBoundingClientRect().width;
const priceRange = 15000;
const priceWeight = priceRange/(sliderWidth - 2*buttonWidth);

function calculateThePrice(x) {
  return Math.trunc(x * priceWeight / 100) * 100;
}

function calculateTheWidth(price) {
  return price / priceWeight;
}

sliderButtonStart.addEventListener('mousedown', setStartRange);
sliderButtonEnd.addEventListener('mousedown', setEndRange);

init();

function init() {
  const sliderCoord = slider.getBoundingClientRect();
  sliderButtonStart.style.left = calculateTheWidth(5000) + 'px';
  sliderButtonEnd.style.left = calculateTheWidth(10000) + buttonWidth + 'px';
  const startButtonCoord = sliderButtonStart.getBoundingClientRect();
  const endButtonCoord = sliderButtonEnd.getBoundingClientRect();
  startRange.style.width = (
    startButtonCoord.x - sliderCoord.x + startButtonCoord.width/2 + 'px'
  );
  endRange.style.width = (
    sliderCoord.right - endButtonCoord.x - startButtonCoord.width/2 + 'px'
  );
}

function setStartRange() {
  const button = event.target;
  const buttonCoord = button.getBoundingClientRect();
  const sliderCoord = slider.getBoundingClientRect();
  const endButtonCoord = sliderButtonEnd.getBoundingClientRect();
  const shift = event.clientX - buttonCoord.x;
  const diff = endButtonCoord.x - sliderCoord.x;

  moveButton(event.pageX);

  function moveButton(pageX) {
    let x = pageX - window.pageXOffset - sliderCoord.x - shift;
    if (x < 0) {
      x = 0;
    }
    else if (x + buttonCoord.width >= diff) {
      x = diff - buttonCoord.width;
    }
    button.style.left = x + 'px';
    startRange.style.width = x + buttonCoord.width/2 + 'px';
    let price = calculateThePrice(x);
    if (price >= 1000) {
      price = Math.trunc(price/1000) + ' ' + (price%1000 || '000');
    }
    priceFrom.innerHTML = price;
  }

  function onMouseMove(event) {
    moveButton(event.pageX);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', removeListeners);

  function removeListeners() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', removeListeners);
  }
}

function setEndRange() {
  const button = event.target;
  const buttonCoord = button.getBoundingClientRect();
  const sliderCoord = slider.getBoundingClientRect();
  const startButtonCoord = sliderButtonStart.getBoundingClientRect();
  const shift = event.clientX - buttonCoord.x;
  const diff = startButtonCoord.right - sliderCoord.x;

  moveButton(event.pageX);

  function moveButton(pageX) {
    let x = pageX - window.pageXOffset - sliderCoord.x - shift;
    if (x < diff) {
      x = diff;
    }
    else if (x + buttonCoord.width >= sliderCoord.width) {
      x = sliderCoord.width - buttonCoord.width;
    }
    button.style.left = x + 'px';
    endRange.style.width = sliderCoord.width - x - buttonCoord.width/2 + 'px';
    let price = calculateThePrice(x - buttonWidth);
    if (price >= 1000) {
      price = Math.trunc(price/1000) + ' ' + (price%1000 || '000');
    }
    priceTo.innerHTML = price;
  }

  function onMouseMove(event) {
    moveButton(event.pageX);
  }

  document.addEventListener('mousemove', onMouseMove);

  document.addEventListener('mouseup', removeListeners);

  function removeListeners() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', removeListeners);
  }

}

sliderButtonStart.ondragstart = function() {
  return false;
};

sliderButtonEnd.ondragstart = function() {
  return false;
};
