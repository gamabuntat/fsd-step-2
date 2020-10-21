import {collectionOfDates, printCalendar, calendar, container} from '../calendar.js';
import {dataPicker, removeRange} from '../__container/calendar__container.js'

calendar.querySelector('.calendar__cancel-button').addEventListener('click', function() {
    dataPicker.startRange = true;
    removeRange();
})
