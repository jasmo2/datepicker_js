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

function hideCalendar ({ body, calendar, input }) {
  input.addEventListener('click', (e) => e.stopPropagation())
  calendar.addEventListener('click', (e) => e.stopPropagation())
  body.addEventListener('click', (e) => {
    calendar.className = calendar.className.replace('calendar--active', '')
  })
}
function togglePresentation ({ input, calendar }) {
  input.onfocus = () => presentCalendar({ calendar })
}
class DatePicker {
  constructor (props) {
    this.state = Object.assign({}, DEFAULT_VALUES, props)
  }

  init () {
    const body = document.getElementsByTagName('body')[0]
    let input = document.getElementById(this.state.id)
    let calendar = document.createElement('div')
    const properties = {...this.state, input}
    const calendarHeader = new CalendarHeader(properties)
    const calendarDates = new CalendarDates(properties)
    calendar.className = 'calendar'
    calendar.appendChild(calendarHeader.render())
    calendar.appendChild(new CalendarWeekDays())
    calendar.appendChild(calendarDates.render())
    input.parentElement.appendChild(calendar)
    togglePresentation({ calendar, input })
    hideCalendar({ body, calendar, input })
  }
}

export default DatePicker
