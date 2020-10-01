export function decreaseButton(increase = null) {
    let counter = this.targetElem.parentElement.querySelector('.dropdown__counter');
    increase ? counter.innerHTML++ : +counter.innerHTML > 0 ? counter.innerHTML-- : null;
}
