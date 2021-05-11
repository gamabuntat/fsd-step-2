import {methods} from '../dropdown.js';

export function dropdownButton() {
  //for formElements page
  if (methods.targetElem.parentElement.
    classList.contains('dropdown_disabled')) { return; }

  const openButton = document.querySelector('.dropdown__button_open');

  document.removeEventListener('click', clickOutsideButton);

  showOrHideExpandlist(this.targetElem);

  if (!openButton) {
    document.addEventListener('click', clickOutsideButton);
  } else if (this.targetElem != openButton) {
    showOrHideExpandlist(openButton);
    document.addEventListener('click', clickOutsideButton);
  }
}

export function clickOutsideButton(e) {
  const insideDButton = e.target.closest('.dropdown__button');
  const insideDExpandList = e.target.closest('.dropdown__expand-list');
  if (insideDButton || insideDExpandList) { return; }

  showOrHideExpandlist(document.querySelector('.dropdown__button_open'));

  document.removeEventListener('click', clickOutsideButton);
}


export function showOrHideExpandlist(button) {
  button.classList.toggle('dropdown__button_open');

  const coord = button.parentElement.getBoundingClientRect();
  const expandList = button.nextElementSibling;
  const expandIcon = button.lastElementChild;

  expandList.style.left = coord.x + window.pageXOffest + 'px';
  expandList.style.top = coord.height - 1 + 'px';
  expandList.style.width = coord.width + 'px';
  expandList.style.borderWidth = button.clientLeft;

  expandList.classList.toggle('dropdown__expand-list_open');
  expandIcon.classList.toggle('dropdown__expand-icon_open');
}
