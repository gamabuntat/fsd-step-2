import {nameSpace} from '../room-card.js'

let inputs = document.querySelectorAll('.room-card__input');
inputs.forEach(input => input.addEventListener('click', switchImage));

function switchImage() {
    let target = event.target;
    let roomCard = nameSpace.getRoomCard(target);
    let margin = (target.dataset.inputOrder) * nameSpace.width;
    roomCard.querySelector('.room-card__carousel-container').style.marginLeft = -margin + 'px';
}
