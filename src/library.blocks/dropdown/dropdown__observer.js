let observer = new MutationObserver((mutations) => {
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
    }

    for (let dropdown of dropdowns) {
      if (dropdown.contains(target)) target = dropdown;
    }

    let counters = Array.from(target.querySelectorAll('.dropdown__counter'));

    let firstSum = +counters[0].innerHTML;
    let secondSum = +counters[1].innerHTML;
    let thirdSum = +counters[2].innerHTML;

    let sum = firstSum + secondSum + thirdSum;

    let diff = sum - thirdSum;

    let result;

    formString();

    function formString() {

      if (target.classList.contains('dropdown_narrow')) {
        let firstString,
          secondString,
          thirdString;

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

        result = [];
        let temp = [firstString, secondString, thirdString].
          forEach((i) => i && result.push(i));
        if (result.length == 3) {
          result.pop();
          result = `${result.join(', ')}...`;
        }
        else if (!result.length) [
          result = 'Сколько комнат'
        ];
        else {result = result.join(', ');}
        return;
      }

      let partOfString,
        babyString;

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

    target.querySelector('.dropdown__button').firstElementChild.innerHTML = `${result}`;
  }

  function showOrHideCancelButton(dropdown) {
    let cancelButton = dropdown.querySelector('.dropdown__cancel-button');
    if (!cancelButton) return;
    cancelButton.classList.toggle('dropdown__cancel-button_hidden');
  }
});

let dropdowns = Array.from(document.querySelectorAll('.dropdown'));

dropdowns.forEach((dropdown) => observer.observe(dropdown, { childList: true, subtree: true, }));
