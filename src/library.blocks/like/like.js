class Like {
  constructor(like) {
    this.like = like;
    this.counter = this.like.querySelector('.js-like__counter');
    this.bindListeners();
  }

  bindListeners() {
    this.like.addEventListener('click', this.handleLikeClick.bind(this));
  }

  handleLikeClick() {
    this.like.classList.toggle('like_pressed') 
      ? this.counter.innerText -= -1
      : this.counter.innerText -= 1;
  }
}

document.querySelectorAll('.js-like').forEach((l) => new Like(l));

