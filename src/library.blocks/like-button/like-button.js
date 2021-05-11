const likeButton = document.querySelectorAll('.js-like-button');
likeButton.forEach((button) => button.addEventListener('click', like));

function like() {
  const target = event.target.closest('.like-button');
  const counter = target.querySelector('.like-button__counter');
  target.classList.contains('like-button_like') 
    ? counter.innerHTML-- 
    : counter.innerHTML++;
  target.classList.toggle('like-button_like');
}
