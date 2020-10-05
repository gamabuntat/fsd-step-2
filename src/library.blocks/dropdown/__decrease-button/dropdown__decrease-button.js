export function decreaseButton() {
    let counter = this.targetElem.parentElement.querySelector('.dropdown__counter');
    if (counter.innerHTML == 0) return;
    counter.innerHTML--;
}
