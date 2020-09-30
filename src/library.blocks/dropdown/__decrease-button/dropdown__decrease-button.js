{
    document.addEventListener('click', function() {
        let target = event.target;
        let counter = target.nextElementSibling;

        if (!target.classList.contains('dropdown__decrease-button') || target.classList.contains('dropdown__decrease-button_disabled')) return;
        counter.innerHTML--;
        if (+counter.innerHTML == 0) target.classList.add('dropdown__decrease-button_disabled');
    })
}
