import {nameSpace} from '../room-card.js'

document.querySelectorAll('.room-card__next-button').forEach(button => button.addEventListener('click', nextImage));

export function nextImage() {
    let imageContainer = event.target.parentElement.querySelector('.room-card__carousel-container');
    let x = Math.min(parseInt(imageContainer.style.marginLeft) || 0, 0) - nameSpace.width;
    x = Math.max(x, -nameSpace.maxWidth);
    imageContainer.style.marginLeft = x + 'px'
    nameSpace.checkInput(imageContainer, x);
}
