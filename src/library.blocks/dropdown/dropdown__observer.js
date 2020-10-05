let observer = new MutationObserver(function(mutations) {
    for (let mutation of mutations) {
        if (mutation.target.classList.contains('dropdown__counter')) {
            showNumberOfGuestes(mutation);
        }
    }

    function showNumberOfGuestes(mutation) {
        let target = mutation.target;
        let showCancleButton = false;

        if (mutation.removedNodes[0].data == 0 && mutation.addedNodes[0].data == 1) {
            target.previousElementSibling.classList.toggle('dropdown__decrease-button_disabled');
            flag = true;

        } else if (mutation.addedNodes[0].data == 0) {
            target.previousElementSibling.classList.toggle('dropdown__decrease-button_disabled');
        };

        while (!target.classList.contains('dropdown')) {
            target = target.parentElement;
        }

        let sum = Array.from(target.querySelectorAll('.dropdown__counter')).
            reduce((sum, counter) => +counter.innerHTML + sum, 0);

        let partOfString = '';

        if (!sum) {
            sum = 'Сколько гостей';
            showOrHideCancelButton(target);
        } else if (sum == 1) {
            partOfString = ' гость';
            if (showCancleButton) showOrHideCancelButton(target);
        } else if (sum < 5) {
            partOfString = ' гостя';
        } else {
            partOfString = ' гостей';
        }

        target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${sum}${partOfString}`;
    }

    function showOrHideCancelButton(dropdown) {
        let cancelButton = dropdown.querySelector('.dropdown__cancel-button');
        cancelButton.classList.toggle('dropdown__cancel-button_hidden')
    }
})

let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach(dropdown => observer.observe(dropdown, { childList: true, subtree: true, }));
