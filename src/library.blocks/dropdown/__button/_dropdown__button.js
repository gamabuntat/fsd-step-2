{
    document.addEventListener('click', dropdownExpandList);

    function dropdownExpandList(e) {

        let target = e.target;

        while (target) {
            console.log(target);
            if (target.classList.contains('dropdown__content')) {
                break;
            }
            target = target.parentElement;
        }

        if (!target) return;

        for (let expandList of document.querySelectorAll('.dropdown__expand-list')) {
            if (e.target.parentElement.contains(expandList)) {
                renderingExpandList(expandList);
                break;
            }
        }

        //document.addEventListener('click', clickOutsideDropdownButton);

        function clickOutsideDropdownButton(e) {
            console.log('contains')
        }
    }

    function renderingExpandList(elem) {

        let coordXParentElem = elem.parentElement.getBoundingClientRect().x;

        elem.style.left = coordXParentElem + 'px';
        elem.parentElement.classList.toggle('dropdown__content_expand');
        elem.classList.toggle('dropdown__expand-list_open');
    }
}
