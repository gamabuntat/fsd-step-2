for (let checkList of document.querySelectorAll('.expandable-checkbox-list')) {
    let lastInput = checkList.lastElementChild.lastElementChild.firstElementChild;
    checkList.addEventListener('focus', function() {
        checkList.lastElementChild.style.display = 'flex'
    });

    lastInput.addEventListener('keydown', function() {
        if (event.target == lastInput && event.code == 'Tab' && !event.shiftKey) {
            checkList.lastElementChild.style.display = '';
        }
    })

    checkList.addEventListener('keydown', function() {
        if (event.target == checkList && event.code == 'Tab' && event.shiftKey) {
            checkList.lastElementChild.style.display = '';
        }
    })
}
