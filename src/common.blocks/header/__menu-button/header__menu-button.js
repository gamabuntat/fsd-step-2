const menu = document.querySelector('.header__menu');

document.querySelector('.js-header__menu-button')
  .addEventListener('click', () => (
    menu.classList.toggle('header__menu_hidden')
  ));

