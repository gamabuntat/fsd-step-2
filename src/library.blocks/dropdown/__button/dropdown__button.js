export function dropdownButton() {
    let openButton = document.querySelector('.dropdown__button_open');

    document.removeEventListener('click', clickOutsideButton);

    if (this.targetElem == openButton) {
        showOrHideExpandlist(this.targetElem);
    } 
    else if (!openButton) {
        showOrHideExpandlist(this.targetElem);
        document.addEventListener('click', clickOutsideButton)
    }
    else {
        showOrHideExpandlist(this.targetElem);
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


function showOrHideExpandlist(button) {
    let coord = button.getBoundingClientRect();
    let expandList = button.nextElementSibling;

    expandList.style.left = coord.x + window.pageXOffest + 'px';
    expandList.style.top = coord.y + coord.height + window.pageYOffset - button.clientTop + 'px';
    expandList.style.width = coord.width - 2*button.clientLeft + 'px';
    expandList.style.borderWidth = button.clientLeft;
    button.classList.toggle('dropdown__button_open');

    if (button.classList.contains('dropdown__button_open')) {
        expandList.style.display = 'flex';
        setTimeout(() => expandList.classList.toggle('dropdown__expand-list_open'), 0);
        return;
    }
    expandList.style.display = 'none';
    expandList.classList.toggle('dropdown__expand-list_open');
}
