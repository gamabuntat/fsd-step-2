{
    document.addEventListener('click', function() {
        let target = event.target;

        if (!target.classList.contains('dropdown__increase-button')) return;
        target.previousElementSibling.innerHTML++;
        target.previousElementSibling.previousElementSibling.classList.remove('dropdown__decrease-button_disabled');
    })
}
