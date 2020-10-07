let calendar = document.querySelector('.calendar');
let today = new Date();
let thisMounth = new Date(today.getFullYear(), today.getMonth(), 1);
let lastDate = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
let weekDay = thisMounth.getDay() - 1;
if (weekDay == -1) weekDay = 6;

let weeks = calendar.rows;
//console.log(weeks[0].cells.length);
//console.log(weeks[weeks.length - 1].cells.length);

printCalendar(today.getMonth() + 1);

function printCalendar(month, year = today.getFullYear()) {
    let day = weekDay;
    let currentDate = 1;

    for (let week = 1; week < weeks.length; week++) {
        for (; day < weeks[week].cells.length; day++) {
            if (currentDate > lastDate) break;
            weeks[week].cells[day].firstElementChild.innerHTML = currentDate;
            currentDate++;
        }
        if (currentDate > lastDate) break;
        day = 0;
    }

    let lastMonthDate = new Date(thisMounth.getFullYear(), thisMounth.getMonth(), 0).getDate();
    let prevDay = weekDay - 1;
    for (; prevDay >= 0; prevDay--) {
        weeks[1].cells[prevDay].firstElementChild.innerHTML = lastMonthDate;
        lastMonthDate--;
    }

    let nextMonthDate = 1;
    for (; day < weeks[weeks.length - 1].cells.length; day++) {
        weeks[weeks.length - 1].cells[day].firstElementChild.innerHTML = nextMonthDate;
        nextMonthDate++;
    }
}
