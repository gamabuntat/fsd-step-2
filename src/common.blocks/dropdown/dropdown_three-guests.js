const increaseButtons = (
  [...document.querySelectorAll('.dropdown')]
    .pop()
    .querySelectorAll('.dropdown__increase-button')
);
const click = new Event('click', {bubbles: true});

increaseButtons[0].dispatchEvent(click);
setTimeout(() => {
  increaseButtons[0].dispatchEvent(click);
  increaseButtons[1].dispatchEvent(click);
}, 0);

