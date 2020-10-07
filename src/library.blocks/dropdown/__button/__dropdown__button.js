//let buttons = Array.from(document.getElementsByClassName('dropdown__button'));
//buttons.forEach(button => button.addEventListener('click', clickOnDropdownButton));

export function clickOnDropdownButton(e) {
    let target = e.target.closest('.dropdown__button');

    buttons.forEach(button => button.classList.contains('dropdown__button_open') || button === target ? showOrHideElements(button) : false);

    document.removeEventListener('click', clickOutsideButton);
    
    if (target.classList.contains('dropdown__button_open')) {
        document.addEventListener('click', clickOutsideButton);
    };
}

function clickOutsideButton(e) {
    let elementClicked = e.target;

    while (elementClicked != document.body.parentElement) {
        if (elementClicked.closest('.dropdown__button') || elementClicked.closest('.dropdown__expand-list')) return;

        elementClicked = elementClicked.parentElement;
    }
    showOrHideElements(buttons.find(button => button.classList.contains('dropdown__button_open')));

    document.removeEventListener('click', clickOutsideButton);
}

