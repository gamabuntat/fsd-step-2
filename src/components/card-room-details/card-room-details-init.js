import CardRoomDetails from './CardRoomDetails';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-card-room-details')
    .forEach((c) => new CardRoomDetails(c))
);
