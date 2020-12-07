let flag = true;
let menu = document.querySelector('.header__menu');

document.querySelector('.header__menu-button').addEventListener('click', function() {
    if (flag) {
        menu.style.display = 'flex';
        flag = false;
    }
    else {
        menu.style.display = 'none';
        flag = true;
    }
})
