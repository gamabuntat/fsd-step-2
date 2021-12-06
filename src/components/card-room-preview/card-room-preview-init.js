import CardRoomPreview from './CardRoomPreview';

window.addEventListener('load', () =>
  document
    .querySelectorAll('.js-card-room-preview')
    .forEach((c) => new CardRoomPreview(c))
);
