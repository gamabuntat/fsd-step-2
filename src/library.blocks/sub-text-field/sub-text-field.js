let input = document.querySelector('.sub-text-field__container');

input.addEventListener('focusin', () => {
  input.style.border = '1px solid rgba(31, 32, 65, 0.50)';
});

input.addEventListener('focusout', () => {
  input.style.border = '';
});
