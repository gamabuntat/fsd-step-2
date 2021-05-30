document.querySelector('.js-dropdown__expand-button')
  .addEventListener(
    'click', 
    (e) => (e.target.classList.toggle('dropdown__expand-button_pressed'))
  );
