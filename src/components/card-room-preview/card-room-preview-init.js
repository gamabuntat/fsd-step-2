import CardRoomPreview from './CardRoomPreview.js';

window.addEventListener('load', () => (
  document.querySelectorAll('.js-card-room-preview')
    .forEach((c) => new CardRoomPreview(c))
));

