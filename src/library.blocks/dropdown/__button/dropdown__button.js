{
    let buttons = Array.from(document.getElementsByClassName('dropdown__button'));
    buttons.forEach(button => button.addEventListener('click', clickOnButton));

    function clickOnButton(e) {
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

    function showOrHideElements(button) {
        let coord = button.getBoundingClientRect();
        let expandList = button.nextElementSibling;

        expandList.style.left = coord.x + window.pageXOffest + 'px';
        expandList.style.top = coord.y + coord.height + window.pageYOffset - button.clientTop + 'px';
        expandList.style.width = coord.width - 2*button.clientLeft + 'px';
        expandList.style.borderWidth = button.clientLeft;
        button.classList.toggle('dropdown__button_open');

        if (button.classList.contains('dropdown__button_open')) {
            expandList.style.display = 'block';
            setTimeout(() => expandList.classList.toggle('dropdown__expand-list_open'), 0);
            return;
        }
        expandList.style.display = 'none';
        expandList.classList.toggle('dropdown__expand-list_open');
    }
}
