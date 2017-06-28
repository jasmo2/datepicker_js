import MyDate from '../utils/Date'
function rows ({ datesEl, initialDate }) {
  const myDate = new MyDate(initialDate)
  let initialDay = myDate.date.getDay() + 1
  let daysInMonth = myDate.daysInMonth()
  let daysPrevInMonth = myDate.daysPrevInMonth()
  let daysLeft = 0
  let rowsHtml = ''
  for (let row = 0; row < 5; row += 1) {
    let datesHtml = ''
    if (initialDate !== 0) {
      for (let date = initialDay; date > 0; date -= 1) {
        const prevDay = daysPrevInMonth - (initialDay - date)
        datesHtml = `<div class="calendar__date">${prevDay}</div>${datesHtml}`
      }
    }
    for (let date = initialDay; date < 7 || daysLeft === daysInMonth; date += 1) {
      daysLeft += 1
      datesHtml += `<div class="calendar__date">${daysLeft}</div>`
    }
    rowsHtml = `${rowsHtml}<div class="calendar__row">${datesHtml}</div>`
    initialDay = 0
  }
  datesEl.innerHTML = rowsHtml
  return datesEl
}

class CalendarDates {
  constructor (props) {
    let datesEl = document.createElement('div')
    datesEl.className = 'calendar__dates'
    return rows({ datesEl, initialDate: props.initialDate })
  }
}

export default CalendarDates
