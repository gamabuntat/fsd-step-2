import {methods} from '../dropdown.js';

export function dropdownButton() {
  //for formElements page
  if (methods.targetElem.parentElement.classList.contains('dropdown_disabled')) return;

  let openButton = document.querySelector('.dropdown__button_open');

  document.removeEventListener('click', clickOutsideButton);

  showOrHideExpandlist(this.targetElem);

  if (!openButton) {
    document.addEventListener('click', clickOutsideButton);
  }
  else if (this.targetElem != openButton) {
    showOrHideExpandlist(openButton);
    document.addEventListener('click', clickOutsideButton);
  }
}

export function clickOutsideButton(e) {
  //return;
  let elementClicked = e.target;

  while (elementClicked != document.body.parentElement) {
    if (elementClicked.closest('.dropdown__button') || elementClicked.closest('.dropdown__expand-list')) return;

    elementClicked = elementClicked.parentElement;
  }
  showOrHideExpandlist(document.querySelector('.dropdown__button_open'));

  document.removeEventListener('click', clickOutsideButton);
}


export function showOrHideExpandlist(button) {

  button.classList.toggle('dropdown__button_open');

  let coord = button.parentElement.getBoundingClientRect();
  let expandList = button.nextElementSibling;
  let expandIcon = button.lastElementChild;

  expandList.style.left = coord.x + window.pageXOffest + 'px';
  expandList.style.top = coord.height - 1 + 'px';
  expandList.style.width = coord.width + 'px';
  expandList.style.borderWidth = button.clientLeft;

  expandList.classList.toggle('dropdown__expand-list_open');
  expandIcon.classList.toggle('dropdown__expand-icon_open');
}
