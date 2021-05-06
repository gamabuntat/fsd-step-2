import {nameSpace} from '../room-card.js';

const inputs = document.querySelectorAll('.room-card__input');
inputs.forEach((input) => input.addEventListener('click', switchImage));

function switchImage() {
  const target = event.target;
  const roomCard = nameSpace.getRoomCard(target);
  const margin = (target.dataset.inputOrder) * nameSpace.width;
  roomCard.querySelector('.room-card__carousel-container')
    .style.marginLeft = -margin + 'px';
}

