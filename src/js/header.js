import MyDate from '../utils/Date'
import CalendarDates from './dates'

class CalendarHeader {
  constructor (props) {
    this.headerBuilder = this.headerBuilder.bind(this)
    this.setInitialDate = this.setInitialDate.bind(this)
    this.changeMonth = this.changeMonth.bind(this)
    this.state = { initialDate: props.initialDate, input: props.input }
  }

  headerBuilder () {
    const { initialDate } = this.state
    const { changeMonth } = this
    let headerEl = document.createElement('div')
    const myDate = new MyDate(initialDate)
    headerEl.className = 'calendar__month'
    // headerEl.innerHTML = header
    const prev = document.createElement('div')
    prev.className = 'calendar__prev'
    prev.innerHTML = '&lt;&lt;'
    prev.addEventListener('click', (e) => changeMonth({ direction: 'prev', monthEl: month }))

    const month = document.createElement('div')
    month.className = 'calendar__month-name'
    month.innerText = myDate.monthName()

    const next = document.createElement('div')
    next.className = 'calendar__next'
    next.innerHTML = '&gt;&gt'
    next.addEventListener('click', (e) => changeMonth({ direction: 'next', monthEl: month }))

    headerEl.appendChild(prev)
    headerEl.appendChild(month)
    headerEl.appendChild(next)
    return headerEl
  }

  changeMonth ({ direction, monthEl }) {
    const { initialDate, input } = this.state
    const { setInitialDate } = this

    const dates = input.parentElement.querySelector('.calendar .calendar__dates ')
    dates.remove()
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
    input.parentElement.querySelector('.calendar').appendChild(new CalendarDates({ input, initialDate: newInitialDate }))
  }

  setInitialDate (val) {
    this.state.initialDate = val
  }

  render () {
    return this.headerBuilder()
  }
}

export default CalendarHeader
