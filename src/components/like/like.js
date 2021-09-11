class Like {
  constructor(like) {
    this.like = like;
    this.counter = this.like.querySelector('.js-like__counter');
    this.btn = this.like.querySelector('.js-like__btn');
    this.bindListeners();
  }

  bindListeners() {
    this.like.addEventListener('click', this.handleLikeClick.bind(this));
    this.btn.addEventListener('focus', this.handleBtnFocus.bind(this));
    this.btn.addEventListener('blur', this.handleBtnBlur.bind(this));
  }

  handleLikeClick() {
    this.like.classList.toggle('like_pressed') 
      ? this.counter.innerText -= -1
      : this.counter.innerText -= 1;
    this.handleBtnFocus();
  }

  handleBtnFocus() {
    this.handleBtnBlur();
    this.like.classList.contains('like_pressed') 
      ? this.like.classList.add('like_focused-pressed') 
      : this.like.classList.add('like_focused');
  }

  handleBtnBlur() {
    this.like.classList.remove('like_focused-pressed');
    this.like.classList.remove('like_focused');
  }
}

document.querySelectorAll('.js-like').forEach((l) => new Like(l));

