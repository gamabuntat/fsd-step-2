let slider = document.querySelector('.range-slider');
let sliderButtonStart = document.querySelector('.range-slider__button_start-range');
let sliderButtonEnd = document.querySelector('.range-slider__button_end-range');

sliderButtonStart.addEventListener('mousedown', setRange);

function setRange() {
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
            button.style.left = 0;
        }
        else if (x + buttonCoord.width >= diff) {
            console.log([x, endButtonCoord.x - sliderCoord.x]);
            button.style.left = diff - buttonCoord.width + 'px'
        }
        else {
            button.style.left = x + 'px'
        }
    }

    function onMouseMove(event) {
        moveButton(event.pageX)
    }

    document.addEventListener('mousemove', onMouseMove)

    document.addEventListener('mouseup', func);

    function func() {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', func);
    }
}

sliderButtonStart.ondragstart = function() {
  return false;
};
