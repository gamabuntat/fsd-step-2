let inputMasked = document.querySelectorAll('.input_masked');
let dd = 31;
let mm = 12;
let yyyy = Infinity;

inputMasked.forEach(input => input.addEventListener('keydown', function() {
    if (event.code == 'Backspace' && input.value.slice(-1) == '.') {
        event.preventDefault();
        input.value = input.value.slice(0, -2);
    }
}));

inputMasked.forEach(input => input.addEventListener('input', function() {
    let lastSymb = input.value.slice(-1);
    let pos = input.value.split('.').length;
    let lastString = input.value.split('.').pop();

    if (input.value.length > 10) {
        removeLastSymb();
        return;
    }
    if (!/[0-9]/.test(input.value.slice(-1))) {
        removeLastSymb();
        return;
    }
    if (lastString.length == 2 && pos <= 2) {
        putPoint();
        return;
    }
    if (lastString.length > 2 && pos <= 2) {
        removeLastSymb();
        putPoint();
        input.value += lastSymb;
        return;
    }

    function putPoint() {
        input.value += '.';
    }
    function removeLastSymb() {
        input.value = input.value.slice(0, -1);
    }
}))