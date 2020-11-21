let lists = Array.from(document.querySelectorAll('.dropdown__expand-list'));
for (let list of lists) {
    list.previousElementSibling.classList.add('dropdown__button_open');
    list.previousElementSibling.querySelector('.dropdown__expand-icon').classList.add('dropdown__expand-icon_open');
    list.classList.add('dropdown__expand-list_expand')
}
