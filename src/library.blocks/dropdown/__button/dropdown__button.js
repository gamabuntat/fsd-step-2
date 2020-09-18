{
    document.addEventListener('click', dropdownExpandList);

    function dropdownExpandList(e) {

        if (!e.target.classList.contains('dropdown__button')) return;

        for (let expandList of document.querySelectorAll('.dropdown__expand-list')) {
            if (e.target.parentElement.contains(expandList)) {
                renderingExpandList(expandList);
                break;
            }
        }
    }

    function renderingExpandList(elem) {

        let coordXParentElem = elem.parentElement.getBoundingClientRect().x;

        elem.style.left = coordXParentElem + 'px';
        elem.parentElement.classList.toggle('dropdown__content_expand');
        elem.classList.toggle('dropdown__expand-list_open');
    }
}
