class CheckList {
  constructor(root) {
    this.root = root;
    this.button = this.root.querySelector('.check-list__button');
    this.bindListeners();
  }

  bindListeners() {
    this.button.addEventListener('click', () => this.handleButtonClick());
  }

  handleButtonClick() {
    this.root.classList.toggle('check-list_open');
  }
}

document.querySelectorAll('.check-list').forEach((cl) => new CheckList(cl));
