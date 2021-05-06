const hideHint = (
  event,
  elems = document.querySelectorAll('.cost-table__hint_shown')
) => elems.forEach((e) => e.classList.toggle('cost-table__hint_shown'));

const showHint = (event) => (
  event.target.firstElementChild.classList.toggle('cost-table__hint_shown')
);

document.querySelectorAll('.cost-table__info').forEach((elem) => (
  elem.addEventListener('click', showHint)
));
  
document.addEventListener('click', hideHint, true);

