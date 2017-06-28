
function rows ({ datesEl, monthSDays }) {
  let daysLeft = 0
  let rowsHtml = ''
  for (let row = 0; row < 5; row += 1) {
    let datesHtml = ''
    for (let date = 0; date < 7 || daysLeft === monthSDays; date += 1) {
      daysLeft += 1
      datesHtml += `<div class="calendar__date">${daysLeft}</div>`
    }
    rowsHtml = `${rowsHtml}<div class="calendar__row">${datesHtml}</div>`
  }
  datesEl.innerHTML = rowsHtml
  return datesEl
}
class CalendarDates {
  constructor (props = {}) {
    let datesEl = document.createElement('div')
    datesEl.className = 'calendar__dates'
    return rows({ datesEl, monthSDays: 30 })
  }
}

export default CalendarDates
