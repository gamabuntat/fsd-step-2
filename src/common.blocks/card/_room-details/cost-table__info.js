const hideHint = (
  event,
  elem = document.querySelector('.cost-table__hint_shown')
) => elem && elem.classList.remove('cost-table__hint_shown');

const showHint = (event) => (
  event.target.firstElementChild.classList.add('cost-table__hint_shown')
);

document.querySelectorAll('.js-cost-table__info').forEach((elem) => (
  elem.addEventListener('click', showHint)
));
  
document.addEventListener('click', hideHint, true);

