import {dropdownButton} from './__button/dropdown__button.js';
import {decreaseButton} from './__decrease-button/dropdown__decrease-button.js';
import {increaseButton} from './__increase-button/dropdown__increase-button.js';
import {submitButton} from './__submit-button/dropdown__submit-button.js';
import {cancelButton} from './__cancel-button/dropdown__cancel-button.js';

let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

for (let dropdown of dropdowns) {
  if (!dropdown.classList.contains('dropdown_disabled')) dropdown.addEventListener('click', defineElement);
}

function defineElement() {
  let prop = methodsProp.find( (prop) => methods.targetElem = event.target.closest(`.${prop}`) );
  if (methods.targetElem) methods[prop]();
}

export let methods = {
  dropdown__button() {
    dropdownButton.call(this);
  },

  'dropdown__increase-button'() {
    increaseButton.call(this);
  }, 

  'dropdown__decrease-button'() {
    decreaseButton.call(this);
  }, 

  'dropdown__submit-button'() {
    submitButton.call(this);
  }, 

  'dropdown__cancel-button'() {
    cancelButton.call(this);
  }, 
};

let methodsProp = Object.keys(methods);
