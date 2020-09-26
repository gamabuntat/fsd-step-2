{
    document.addEventListener('click', function() {
        let target = event.target;
        if (!target.classList.contains('dropdown__increase-button')) return;
        target.previousElementSibling.innerHTML++;
    })
}
