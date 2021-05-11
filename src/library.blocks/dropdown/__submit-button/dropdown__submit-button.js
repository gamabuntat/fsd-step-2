import {
  showOrHideExpandlist,
  clickOutsideButton
} from '../__button/dropdown__button.js';

export function submitButton() {
  const openButton = document.querySelector('.dropdown__button_open');
  document.removeEventListener('click', clickOutsideButton);
  showOrHideExpandlist(openButton);
}

