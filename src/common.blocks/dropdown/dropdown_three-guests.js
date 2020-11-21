let increaseButtons = Array.from(document.querySelectorAll('.dropdown')).pop().querySelectorAll('.dropdown__increase-button');

let click = new Event('click', {bubbles: true});

increaseButtons[0].dispatchEvent(click);
setTimeout(function() {
    increaseButtons[0].dispatchEvent(click);
    increaseButtons[1].dispatchEvent(click);
}, 0);
