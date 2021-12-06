import CardRoomDetails from './CardRoomDetails.js';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-card-room-details')
    .forEach((c) => new CardRoomDetails(c))
);
