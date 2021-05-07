document.querySelectorAll('.dropdown__expand-list').forEach((l) => {
  l.previousElementSibling.classList.add('dropdown__button_open');
  l.previousElementSibling.querySelector('.dropdown__expand-icon')
    .classList.add('dropdown__expand-icon_open');
  l.classList.add('dropdown__expand-list_expand');
});
