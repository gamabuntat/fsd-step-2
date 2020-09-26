{
    document.addEventListener('click', function() {
        let target = event.target;
        let counter = target.nextElementSibling;
        if (!target.classList.contains('dropdown__decrease-button')) return;
        if (counter.innerHTML > 0) counter.innerHTML--;
    })
}

