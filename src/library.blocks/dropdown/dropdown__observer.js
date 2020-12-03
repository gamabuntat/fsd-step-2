let observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
        if (mutation.target.classList.contains('dropdown__counter')) {
            makeChangesInDropdown(mutation);
        }
    }

    function makeChangesInDropdown(mutation) {
        let target = mutation.target;
        let showCancleButton = false;

        if (mutation.removedNodes[0].data == 0 && mutation.addedNodes[0].data == 1) {
            target.previousElementSibling.classList.remove('dropdown__decrease-button_disabled');
            showCancleButton = true;

        } else if (mutation.addedNodes[0].data == 0) {
            target.previousElementSibling.classList.add('dropdown__decrease-button_disabled');
        };

        for (let dropdown of dropdowns) {
            if (dropdown.contains(target)) target = dropdown;
        }

        let counters = Array.from(target.querySelectorAll('.dropdown__counter'));

        let sum = counters.reduce((sum, counter) => +counter.innerHTML + sum, 0);

        let lastSum = +counters[counters.length - 1].innerHTML;

        let diff = sum - lastSum;

        let partOfString = '';
        let babyString = '';

        if (diff == 0) {partOfString = ``}
        else if (diff == 1) {partOfString = `${diff} гость`}
        else if (diff < 5) {partOfString = `${diff} гостя`}
        else {partOfString = `${diff} гостей`}

        if (lastSum == 0) {babyString = ''}
        else if (lastSum == 1) {babyString = `${lastSum} младенец`}
        else if (lastSum < 5) {babyString =  `${lastSum} младенца`}
        else {babyString = `${lastSum} младенцев`}

        let result = `${partOfString} ${babyString}`
        result = result.split(' ');
        result.length == 4 ? result = `${result[0]} ${result[1]}, ${result[2]} ${result[3]}` : 
            result = result.join(' ')

        if (!sum) {
            result = 'Сколько гостей';
            showOrHideCancelButton(target);
        }
        else if (sum == 1) {
            if (showCancleButton) showOrHideCancelButton(target);
        }

        target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${result}`;
    }

    function showOrHideCancelButton(dropdown) {
        let cancelButton = dropdown.querySelector('.dropdown__cancel-button');
        cancelButton.classList.toggle('dropdown__cancel-button_hidden')
    }
})

let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(dropdown => observer.observe(dropdown, { childList: true, subtree: true, }));
