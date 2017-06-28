import MyDate from '../utils/Date'

function clickable({ target, date, input }) {
  input.value = new Date(date.getFullYear(), date.getMonth(), target.textContent).toDateString()
  const calendar = input.parentElement.querySelector('.calendar')
  calendar.className = calendar.className.replace('calendar--active', '')
}

function rows ({ datesEl, initialDate, input }) {
  const myDate = new MyDate(initialDate)
  const today = myDate.date.getDate()
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
    for (let date = initialDay; date < 7; date += 1) {
      let active = null
      if (daysLeft < daysInMonth) {
        if (daysLeft >= today) active = 'calendar__date--active'
      } else {
        daysLeft = 0
      }
      daysLeft += 1
      datesHtml += `<div class="calendar__date ${active}">${daysLeft}</div>`
    }


    rowsHtml = `${rowsHtml}<div class="calendar__row">${datesHtml}</div>`
    initialDay = 0
  }
  datesEl.innerHTML = rowsHtml
  datesEl.querySelectorAll('.calendar__date--active')
    .forEach(el => el.addEventListener('click',
      (e) => clickable({target: e.target, date: myDate.date, input}))
    )
  // datesEl.querySelectorAll('.calendar__date--active')
  return datesEl
}

class CalendarDates {
  constructor (props) {
    let datesEl = document.createElement('div')
    datesEl.className = 'calendar__dates'
    const { initialDate, input } = props
    return rows({ datesEl, initialDate, input })
  }
}

export default CalendarDates
