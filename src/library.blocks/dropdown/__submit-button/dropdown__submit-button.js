import {showOrHideExpandlist} from '../__button/dropdown__button.js'

export function submitButton() {
    let openButton = document.querySelector('.dropdown__button_open');
    showOrHideExpandlist(openButton);

}
