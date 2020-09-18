{
    Array.from(document.getElementsByClassName('dropdown__button')).forEach(elem => elem.addEventListener('click', dropdownExpandList));

    let expandList = Array.from(document.getElementsByClassName('dropdown__expand-list'));

    function dropdownExpandList(e) {

        let target = e.target.closest('.dropdown__button');
        let expandList = target.nextElementSibling;

        for (let item of document.querySelectorAll('.dropdown__expand-list')) {
            if (item.classList.contains('dropdown__expand-list_open') || item == expandList) {
                showOrHideElement(item);
            }
        }

        document.removeEventListener('click', closeDropdownExpandList);
        
        if (expandList.classList.contains('dropdown__expand-list_open')) {
            document.addEventListener('click', closeDropdownExpandList);
        };
    }

    function closeDropdownExpandList(e) {

        let elementClicked = e.target;

        while (elementClicked != document.body.parentElement) {

            if (elementClicked.parentElement.classList.contains('dropdown__content')) {
                return;
            }

            console.log(elementClicked);
            elementClicked = elementClicked.parentElement;
        }

        expandList.forEach(list => list.classList.contains('dropdown__expand-list_open') ? showOrHideElement(list) : '');

        document.removeEventListener('click', closeDropdownExpandList);
    }

    function showOrHideElement(elem) {
        
        let coordXParentElem = elem.parentElement.getBoundingClientRect().x;

        elem.style.left = coordXParentElem + 'px';
        elem.parentElement.classList.toggle('dropdown__content_expand');
        elem.classList.toggle('dropdown__expand-list_open');
    }
}
