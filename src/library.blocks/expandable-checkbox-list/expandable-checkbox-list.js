for (let checkList of document.querySelectorAll('.expandable-checkbox-list')) {
  let lastInput = checkList.lastElementChild.lastElementChild.firstElementChild;
  checkList.addEventListener('focus', () => {
    checkList.lastElementChild.style.display = 'flex';
  });

  lastInput.addEventListener('keydown', () => {
    if (event.target == lastInput && event.code == 'Tab' && !event.shiftKey) {
      checkList.lastElementChild.style.display = '';
    }
  });

  checkList.addEventListener('keydown', () => {
    if (event.target == checkList && event.code == 'Tab' && event.shiftKey) {
      checkList.lastElementChild.style.display = '';
    }
  });
}
