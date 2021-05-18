import {nameSpace} from '../room-card.js';

document.querySelectorAll('.js-room-card__prev-button')
  .forEach((button) => button.addEventListener('click', prevImage));

export function prevImage() {
  const imageContainer = event.target.parentElement
    .querySelector('.js-room-card__carousel-container');
  let x = Math.min(
    parseInt(imageContainer.style.marginLeft) || 0, 0
  ) + nameSpace.width;
  x = Math.min(x, 0);
  imageContainer.style.marginLeft = x + 'px';
  nameSpace.checkInput(imageContainer, x);
}

