import {decreaseButton} from './__decrease-button/dropdown__decrease-button.js'
import {increaseButton} from './__increase-button/dropdown__increase-button.js'

let dropdowns = Array.from(document.querySelectorAll('.dropdown'));
dropdowns.forEach(dropdown => dropdown.addEventListener('click', f));

function f() {
    let prop = methodsProp.find( prop => methods.targetElem = event.target.closest(`.${prop}`) );
    if (methods.targetElem) methods[prop]();
}

let methods = {
    dropdown__button: function() {
        console.log(this.targetElem)
    },

    'dropdown__increase-button': function() {
        increaseButton.call(this)
    }, 

    'dropdown__decrease-button': function() {
        decreaseButton.call(this)
    }, 
}

let methodsProp = Object.keys(methods);
