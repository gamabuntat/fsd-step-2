import {methods} from '../dropdown.js'

export function dropdownButton() {
    let openButton = document.querySelector('.dropdown__button_open');

    document.removeEventListener('click', clickOutsideButton);

    showOrHideExpandlist(this.targetElem);

    if (!openButton) {
        document.addEventListener('click', clickOutsideButton)
    }
    else if (this.targetElem != openButton) {
        showOrHideExpandlist(openButton);
        document.addEventListener('click', clickOutsideButton)
    }
}

function clickOutsideButton(e) {
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

    let coord = button.getBoundingClientRect();
    let expandList = button.nextElementSibling;
    let expandIcon = button.lastElementChild;

    expandList.style.left = coord.x + window.pageXOffest + 'px';
    expandList.style.top = coord.y + coord.height + window.pageYOffset - button.clientTop + 'px';
    expandList.style.width = coord.width - 2*button.clientLeft + 'px';
    expandList.style.borderWidth = button.clientLeft;

    expandList.classList.toggle('dropdown__expand-list_open');
    expandIcon.classList.toggle('dropdown__expand-icon_open');

    //if (button.classList.contains('dropdown__button_open')) {
    //    expandList.style.display = 'flex';
    //    setTimeout(() => expandList.classList.toggle('dropdown__expand-list_open'), 0);
    //    return;
    //}
    //expandList.style.display = 'none';
    //exandList.classList.toggle('dropdown__expand-list_open');
    
}
