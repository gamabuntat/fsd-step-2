let roomCards = document.querySelectorAll('.room-card');
roomCards.forEach((card) => card.querySelector('.rate').addEventListener('click', () => event.preventDefault()));
