{
    let observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => mutation.target.classList.contains('dropdown__counter') ? 
            showNumberOfGuestes(mutation.target) : 'false');

        function showNumberOfGuestes(target) {
            while (!target.classList.contains('dropdown')) {
                target = target.parentElement;
            }

            let sum = Array.from(target.querySelectorAll('.dropdown__counter')).
                reduce((sum, counter) => +counter.innerHTML + sum, 0);

            let partOfString = '';

            if (!sum) {
                sum = 'Сколько гостей';
            } else if (sum == 1) {
                partOfString = ' гость';
            } else if (sum < 5) {
                partOfString = ' гостя';
            } else {
                partOfString = ' гостей';
            }

            target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${sum}${partOfString}`;
        }
    })

    let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

    dropdowns.forEach(dropdown => observer.observe(dropdown, { childList: true, subtree: true }));
}
