//window.onload = function() {
    let increaseButtons = Array.from(document.querySelector('.dropdown_special').querySelectorAll('.dropdown__increase-button'));

    let click = new Event('click', {bubbles: true});

    increaseButtons[0].dispatchEvent(click);
    setTimeout(function f() {
        increaseButtons[0].dispatchEvent(click);
        increaseButtons[1].dispatchEvent(click);
    }, 0);
//}
