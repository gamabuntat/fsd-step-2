const f = (aside) => () => (
  aside.classList.toggle('aside_shown') && window.scrollTo(pageXOffset, 0)
);

document.querySelector('.js-main__show-aside-button')
  .addEventListener('click', f(document.querySelector('.js-aside')));

