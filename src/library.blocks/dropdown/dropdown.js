{
    let prevSum = 0;

    let observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => mutation.target.classList.contains('dropdown__counter') ? 
            showNumberOfGuestes(mutation.target) : 'false');

        function showNumberOfGuestes(target) {
            while (!target.classList.contains('dropdown')) {
                target = target.parentElement;
            }

            if (!prevSum) showOrHideCancelButton(target);

            let sum = Array.from(target.querySelectorAll('.dropdown__counter')).
                reduce((sum, counter) => +counter.innerHTML + sum, 0);

            prevSum = sum;

            let partOfString = '';

            if (!sum) {
                sum = 'Сколько гостей';
                showOrHideCancelButton(target);
            } else if (sum == 1) {
                partOfString = ' гость';
            } else if (sum < 5) {
                partOfString = ' гостя';
            } else {
                partOfString = ' гостей';
            }

            target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${sum}${partOfString}`;
        }

        function showOrHideCancelButton(dropdown) {
            let cancelButton = dropdown.querySelector('.dropdown__cancel-button_hidden');
        }
    })

    let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

    dropdowns.forEach(dropdown => observer.observe(dropdown, { childList: true, subtree: true }));
}
