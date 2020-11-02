let likeButton = document.querySelectorAll('.like-button');
likeButton.forEach(button => button.addEventListener('click', like));

function like() {
    let target = event.target.closest('.like-button');
    let counter = target.querySelector('.like-button__counter');
    target.classList.contains('like-button_like') ? counter.innerHTML-- : counter.innerHTML++;
    target.classList.toggle('like-button_like');
}
