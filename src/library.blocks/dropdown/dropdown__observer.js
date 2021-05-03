const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    if (mutation.target.classList.contains('dropdown__counter')) {
      makeChangesInDropdown(mutation);
    }
  }

  function makeChangesInDropdown(mutation) {
    let target = mutation.target;
    let showCancleButton = false;

    if (
      mutation.removedNodes[0].data == 0 && mutation.addedNodes[0].data == 1
    ) {
      target.previousElementSibling.classList.remove(
        'dropdown__decrease-button_disabled'
      );
      showCancleButton = true;

    } else if (mutation.addedNodes[0].data == 0) {
      target.previousElementSibling.classList.add(
        'dropdown__decrease-button_disabled'
      );
    }

    for (const dropdown of dropdowns) {
      if (dropdown.contains(target)) target = dropdown;
    }

    const counters = Array.from(
      target.querySelectorAll('.dropdown__counter'), 
      (c) => +c.innerHTML
    );
    const [firstSum, secondSum, thirdSum] = counters;
    const sum = counters.reduce((acc, c) => acc + c);
    const diff = sum - thirdSum;
    let result = [];

    formString();

    function formString() {

      if (target.classList.contains('dropdown_narrow')) {
        let firstString;
        let secondString;
        let thirdString;

        !firstSum ? firstString = '' 
          : firstSum == 1 ? firstString = `${firstSum} спальня`
            : firstSum < 5 ? firstString = `${firstSum} спальни`
              : firstString = `${firstSum} спальней`;

        !secondSum ? secondString = '' 
          : secondSum == 1 ? secondString = `${secondSum} кровать`
            : secondSum < 5 ? secondString = `${secondSum} кровати`
              : secondString = `${secondSum} кроватей`;

        !thirdSum ? thirdString = '' 
          : thirdSum == 1 ? thirdString = `${thirdSum} ванная комната`
            : thirdSum < 5 ? thirdString = `${thirdSum} ванные комнаты`
              : thirdString = `${thirdSum} ванных комнат`;

        [firstString, secondString, thirdString]
          .forEach((i) => i && result.push(i));
        if (result.length == 3) {
          result.pop();
          result = `${result.join(', ')}...`;
        } else if (result.length == 0) {
          result = 'Сколько комнат';
        } else {
          result = result.join(', ');
        }
        return;
      }

      let partOfString;
      let babyString;

      if (diff == 0) {partOfString = ``;}
      else if (diff == 1) {partOfString = `${diff} гость`;}
      else if (diff < 5) {partOfString = `${diff} гостя`;}
      else {partOfString = `${diff} гостей`;}

      if (thirdSum == 0) {babyString = '';}
      else if (thirdSum == 1) {babyString = `${thirdSum} младенец`;}
      else if (thirdSum < 5) {babyString =  `${thirdSum} младенца`;}
      else {babyString = `${thirdSum} младенцев`;}

      result = `${partOfString} ${babyString}`;
      result = result.split(' ');
      result.length == 4 ?
        result = `${partOfString}, ${babyString}` :
        result = result.join(' ');

      if (!sum) {
        result = 'Сколько гостей';
        showOrHideCancelButton(target);
      }
      else if (sum == 1) {
        if (showCancleButton) showOrHideCancelButton(target);
      }
    }

    target
      .querySelector('.dropdown__button')
      .firstElementChild.innerHTML = `${result}`;
  }

  function showOrHideCancelButton(dropdown) {
    const cancelButton = dropdown.querySelector('.dropdown__cancel-button');
    if (!cancelButton) return;
    cancelButton.classList.toggle('dropdown__cancel-button_hidden');
  }
});

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach((dropdown) => (
  observer.observe(dropdown, { childList: true, subtree: true, })
));

