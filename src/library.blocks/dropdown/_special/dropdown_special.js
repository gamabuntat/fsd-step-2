//window.onload = function() {
let lists = Array.from(document.querySelectorAll('.dropdown__expand-list'));
for (let list of lists) {
    list.previousElementSibling.classList.add('dropdown__button_open');
    list.previousElementSibling.querySelector('.dropdown__expand-icon').classList.add('dropdown__expand-icon_open');
    list.classList.add('dropdown__expand-list_expand')
}

let increaseButtons = Array.from(lists[lists.length - 1].querySelectorAll('.dropdown__increase-button'));
console.log(increaseButtons[0]);

let click = new Event('click', {bubbles: true});

increaseButtons[0].dispatchEvent(click);
setTimeout(function() {
    increaseButtons[0].dispatchEvent(click);
    increaseButtons[1].dispatchEvent(click);
}, 0);
