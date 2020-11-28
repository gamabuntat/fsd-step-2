import {nameSpace} from '../room-card.js'

let inputs = document.querySelectorAll('.room-card__input');
inputs.forEach(input => input.addEventListener('click', switchImage));

function switchImage() {
    let target = event.target;
    console.log(target);
    let roomCard = nameSpace.getRoomCard(target);
    let margin = (target.dataset.inputOrder - 1) * nameSpace.width;
    roomCard.querySelector('.room-card__carousel-container').style.marginLeft = -margin + 'px';
}
