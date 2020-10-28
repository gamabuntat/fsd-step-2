let input = document.querySelector('.sub-text-field__container');

input.addEventListener('focusin', function() {
    input.style.border = '1px solid rgba(31, 32, 65, 0.50)'
})

input.addEventListener('focusout', function() {
    input.style.border = ''
})
