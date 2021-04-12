export function decreaseButton() {
  let counter = this.targetElem.nextElementSibling;
  if (counter.innerHTML == 0) return;
  counter.innerHTML--;
}
