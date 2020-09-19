{
    let buttons = Array.from(document.getElementsByClassName('dropdown__button'));
    buttons.forEach(elem => elem.addEventListener('click', clickOnButton));

    function clickOnButton(e) {

        let target = e.target.closest('.dropdown__button');

        buttons.forEach(button => button.classList.contains('dropdown__button_open') || button === target ? showOrHideElement(button) : false);

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

        showOrHideElement(buttons.find(button => button.classList.contains('dropdown__button_open')));

        document.removeEventListener('click', clickOutsideButton);
    }

    function showOrHideElement(elem) {
        
        let coord = elem.getBoundingClientRect();
        let expandList = elem.nextElementSibling;

        expandList.style.left = coord.x + window.pageXOffest + 'px';
        expandList.style.top = coord.y + coord.height + window.pageYOffset - elem.clientTop + 'px';
        expandList.style.width = coord.width - 2*elem.clientLeft + 'px';
        expandList.style.borderWidth = elem.clientLeft;
        elem.classList.toggle('dropdown__button_open');
        expandList.classList.toggle('dropdown__expand-list_open');
    }
}
