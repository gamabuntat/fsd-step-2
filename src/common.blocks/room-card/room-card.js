import {nextImage} from './__next-button/room-card__next-button.js'

export let nameSpace = {
    width: 270,

    getPosition(x) {
        return Math.abs(x / this.width) + 1;
    },
    getRoomCard(elem) {
        while (!elem.classList.contains('room-card') && elem != document.body) {
            elem = elem.parentElement 
            console.log(elem);
        }
        return elem;

    },
    checkInput(elem, x) {
        let roomCard = this.getRoomCard(elem);
        let position = this.getPosition(x);
        let inputs = roomCard.querySelectorAll('input');
        inputs[position - 1].checked = true;
    },
}
