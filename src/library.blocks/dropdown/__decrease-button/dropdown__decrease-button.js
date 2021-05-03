export function decreaseButton() {
  const counter = this.targetElem.nextElementSibling;
  if (counter.innerHTML == 0) return;
  counter.innerHTML--;
}
