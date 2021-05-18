import {dropdownButton} from './__button/dropdown__button.js';
import {decreaseButton} from './__decrease-button/dropdown__decrease-button.js';
import {increaseButton} from './__increase-button/dropdown__increase-button.js';
import {submitButton} from './__submit-button/dropdown__submit-button.js';
import {cancelButton} from './__cancel-button/dropdown__cancel-button.js';
import {observer} from './dropdown__observer.js';

const dropdowns = [...document.querySelectorAll('.js-dropdown')];

for (const dropdown of dropdowns) {
  if (!dropdown.classList.contains('dropdown_disabled')) {
    dropdown.addEventListener('click', defineElement);
  }
}

function defineElement() {
  const prop = methodsProp.find((prop) => (
    methods.targetElem = event.target.closest(`.${prop}`))
  );
  if (methods.targetElem) methods[prop]();
}

export const methods = {
  targetElem: null,

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

const methodsProp = Object.keys(methods);

// observe
dropdowns.forEach((dropdown) => (
  observer.observe(dropdown, { childList: true, subtree: true, })
));

