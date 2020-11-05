let slider = document.querySelector('.range-slider__container');
let sliderButtonStart = document.querySelector('.range-slider__button_start-range');
let sliderButtonEnd = document.querySelector('.range-slider__button_end-range');
let startRange = slider.querySelector('.range-slider__start-range');
let endRange = slider.querySelector('.range-slider__end-range');
let priceFrom = document.querySelector('.range-slider__price_from');
let priceTo = document.querySelector('.range-slider__price_to');

let buttonWidth = sliderButtonStart.getBoundingClientRect().width;
let sliderWidth = slider.getBoundingClientRect().width;
let priceRange = 15000;
let priceWeight = priceRange/(sliderWidth - 2*buttonWidth);

function calculateThePrice(x) {
    return Math.trunc(x * priceWeight / 100) * 100;
}

function calculateTheWidth(price) {
    return price / priceWeight
}

sliderButtonStart.addEventListener('mousedown', setStartRange);
sliderButtonEnd.addEventListener('mousedown', setEndRange);

init();

function init() {
    let sliderCoord = slider.getBoundingClientRect();
    sliderButtonStart.style.left = calculateTheWidth(5000) + 'px';
    sliderButtonEnd.style.left = calculateTheWidth(10000) + buttonWidth + 'px';
    let startButtonCoord = sliderButtonStart.getBoundingClientRect();
    let endButtonCoord = sliderButtonEnd.getBoundingClientRect();
    startRange.style.width = startButtonCoord.x - sliderCoord.x + startButtonCoord.width/2 + 'px';
    endRange.style.width = sliderCoord.right - endButtonCoord.x - startButtonCoord.width/2 + 'px';
}

function setStartRange() {
    let button = event.target;
    let buttonCoord = button.getBoundingClientRect();
    let sliderCoord = slider.getBoundingClientRect();
    let endButtonCoord = sliderButtonEnd.getBoundingClientRect();
    let shift = event.clientX - buttonCoord.x;
    let diff = endButtonCoord.x - sliderCoord.x;

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
        if (price >= 1000) price = Math.trunc(price/1000) + ' ' + (price%1000 || '000');
        priceFrom.innerHTML = price;
    }

    function onMouseMove(event) {
        moveButton(event.pageX)
    }

    document.addEventListener('mousemove', onMouseMove)

    document.addEventListener('mouseup', removeListeners);

    function removeListeners() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', removeListeners);
    }
}

function setEndRange() {
    let button = event.target;
    let buttonCoord = button.getBoundingClientRect();
    let sliderCoord = slider.getBoundingClientRect();
    let startButtonCoord = sliderButtonStart.getBoundingClientRect();
    let shift = event.clientX - buttonCoord.x;
    let diff = startButtonCoord.right - sliderCoord.x;

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
        if (price >= 1000) price = Math.trunc(price/1000) + ' ' + (price%1000 || '000');
        priceTo.innerHTML = price;
    }

    function onMouseMove(event) {
        moveButton(event.pageX)
    }

    document.addEventListener('mousemove', onMouseMove)

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
