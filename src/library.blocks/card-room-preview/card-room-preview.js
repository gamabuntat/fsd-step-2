class CardRoomPreview {
  constructor(root) {
    this.root = root;
    console.log(root);
  }
}

document.querySelectorAll('.js-card-room-preview')
  .forEach((c) => new CardRoomPreview(c));

