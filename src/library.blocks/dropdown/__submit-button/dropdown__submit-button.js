import {showOrHideExpandlist} from '../__button/dropdown__button.js';
import {clickOutsideButton} from '../__button/dropdown__button.js';

export function submitButton() {
  const openButton = document.querySelector('.dropdown__button_open');
  document.removeEventListener('click', clickOutsideButton);
  showOrHideExpandlist(openButton);
}

