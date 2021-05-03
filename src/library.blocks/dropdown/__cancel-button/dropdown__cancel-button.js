export function cancelButton() {
  let target = this.targetElem;
  while (!target.classList.contains('dropdown')) {
    target = target.parentElement;
  }
  for (const counter of target.querySelectorAll('.dropdown__counter')) {
    counter.innerHTML = 0; 
  }
}
