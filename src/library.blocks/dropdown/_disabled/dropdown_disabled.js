// For formELements page
for (let dropdown of document.querySelectorAll('.dropdown')) {
    if (!dropdown.classList.contains('dropdown_special')) {
        dropdown.classList.add('dropdown_disabled')
    }
}

for (let expandList of document.querySelectorAll('.dropdown__expand-list')) {
    expandList.classList.add('dropdown__expand-list_expand');
    expandList.previousElementSibling.lastElementChild.classList.add('dropdown__expand-icon_open')
}
