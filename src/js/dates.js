import MyDate from '../utils/Date'

class CalendarDates {
  constructor (props) {
    this.clickable = this.clickable.bind(this)
    this.render = this.render.bind(this)
    let datesEl = document.createElement('div')
    datesEl.className = 'calendar__dates'
    const { initialDate, input } = props
    this.state = { datesEl, initialDate, input }
  }

  clickable ({ target, date, input }) {
    input.value = new Date(date.getFullYear(), date.getMonth(), target.textContent).toDateString()
    const calendar = input.parentElement.querySelector('.calendar')
    calendar.className = calendar.className.replace('calendar--active', '')
  }

  rows ({ initialDate }) {
    const myDate = new MyDate(initialDate)
    const today = myDate.date.getDate()
    let initialDay = myDate.date.getDay()
    let daysInMonth = myDate.daysInMonth()
    let daysPrevInMonth = myDate.daysPrevInMonth()
    let daysLeft = 0
    let rowsHtml = ''
    let actualMonth = true
    for (let row = 0; row < 6; row += 1) {
      let datesHtml = ''
      if (initialDate !== 0) {
        for (let date = initialDay; date > 0; date -= 1) {
          const prevDay = daysPrevInMonth - (initialDay - date)
          datesHtml = `<div class="calendar__date">${prevDay}</div>${datesHtml}`
        }
      }
      for (let date = initialDay; date < 7; date += 1) {
        let active = null
        if (daysLeft < daysInMonth && actualMonth) {
          if (daysLeft >= (today - 1)) active = 'calendar__date--active'
        } else if (actualMonth) {
          daysLeft = 0
          actualMonth = false
        }
        daysLeft += 1
        datesHtml += `<div class="calendar__date ${active}">${daysLeft}</div>`
      }
      rowsHtml = `${rowsHtml}<div class="calendar__row">${datesHtml}</div>`
      initialDay = 0
    }
    return { rowsHtml, myDate }
  }

  render () {
    const { datesEl, initialDate, input } = this.state
    const { rowsHtml, myDate } = this.rows({ initialDate, input })
    datesEl.innerHTML = rowsHtml
    datesEl.querySelectorAll('.calendar__date--active')
      .forEach(el => el.addEventListener('click',
        (e) => this.clickable({ target: e.target, date: myDate.date, input }))
      )
    return datesEl
  }
}

export default CalendarDates
