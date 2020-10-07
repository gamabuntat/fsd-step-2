export function cancelButton() {
    let target = this.targetElem;
    while (!target.classList.contains('dropdown')) {
        target = target.parentElement;
    }
    for (let counter of target.querySelectorAll('.dropdown__counter')) {
        counter.innerHTML = 0; 
    }
}
