export function cancelButton() {
  event.target.closest('.js-dropdown')
    .querySelectorAll('.js-dropdown__counter')
    .forEach((counter) => counter.innerHTML = String(0));
}
