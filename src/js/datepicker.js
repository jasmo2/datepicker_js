import CalendarHeader from './header'
import CalendarWeekDays from './weeks'
import CalendarDates from './dates'

const DEFAULT_VALUES = {
  initialDate: new Date(),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

function presentCalendar ({ calendar }) {
  calendar.className += ' calendar--active'
}

function togglePresentation ({ input, calendar }) {
  input.onfocus = () => presentCalendar({ calendar })
}
class DatePicker {
  constructor (props) {
    this.state = Object.assign({}, DEFAULT_VALUES, props)
  }

  init () {
    let input = document.getElementById(this.state.id)
    let calendar = document.createElement('div')
    const properties = {...this.state, input}
    const calendarHeader = new CalendarHeader(properties)
    calendar.className = 'calendar'
    calendar.appendChild(calendarHeader.render())
    calendar.appendChild(new CalendarWeekDays())
    calendar.appendChild(new CalendarDates(properties))
    input.parentElement.appendChild(calendar)
    togglePresentation({ calendar, input })
  }
}

export default DatePicker
