import MyDate from '../utils/Date'
import CalendarDates from './dates'

class CalendarHeader {
  constructor (props) {
    this.headerBuilder = this.headerBuilder.bind(this)
    this.setInitialDate = this.setInitialDate.bind(this)
    this.changeMonth = this.changeMonth.bind(this)
    this.prevEl = this.prevEl.bind(this)
    this.monthEl = this.monthEl.bind(this)
    this.nextEl = this.nextEl.bind(this)
    this.state = { initialDate: props.initialDate, input: props.input }
  }

  prevEl () {
    const prev = document.createElement('div')
    prev.className = 'calendar__prev'
    prev.innerHTML = '&lt;&lt;'
    prev.addEventListener('click', (e) => this.changeMonth({ direction: 'prev', monthEl: this.month }))

    return prev
  }

  monthEl () {
    const { initialDate } = this.state
    const myDate = new MyDate(initialDate)

    const month = document.createElement('div')
    month.className = 'calendar__month-name'
    month.innerText = myDate.monthName()
    this.month = month

    return month
  }

  nextEl () {
    const next = document.createElement('div')
    next.className = 'calendar__next'
    next.innerHTML = '&gt;&gt'
    next.addEventListener('click', (e) => this.changeMonth({ direction: 'next', monthEl: this.month }))

    return next
  }

  headerBuilder () {
    const { prevEl, monthEl, nextEl } = this
    let headerEl = document.createElement('div')
    headerEl.className = 'calendar__month'
    // headerEl.innerHTML = header

    headerEl.appendChild(prevEl())
    headerEl.appendChild(monthEl())
    headerEl.appendChild(nextEl())
    return headerEl
  }

  changeMonth ({ direction, monthEl }) {
    const { initialDate, input } = this.state
    const { setInitialDate } = this

    const dates = input.parentElement.querySelector('.calendar .calendar__dates ')

    let newInitialDate = null
    let year = initialDate.getFullYear()
    let month = initialDate.getMonth()
    if (direction === 'prev') {
      if ((month - 1) < 0) {
        month = 11
        year -= 1
      } else {
        month -= 1
      }
    } else {
      if ((month + 1) > 11) {
        month = 0
        year += 1
      } else {
        month += 1
      }
    }
    newInitialDate = new Date(year, month, 1)
    setInitialDate(newInitialDate)
    const myDate = new MyDate(newInitialDate)
    monthEl.innerText = myDate.monthName()
    const calendarDates = new CalendarDates({ input, initialDate: newInitialDate })

    dates.childNodes.forEach((element) => {
      element.removeEventListener('click', calendarDates.clickable, true)
    }, this)
    dates.remove()
    input.parentElement.querySelector('.calendar').appendChild(calendarDates.render())
  }

  setInitialDate (val) {
    this.state.initialDate = val
  }

  render () {
    return this.headerBuilder()
  }
}

export default CalendarHeader
