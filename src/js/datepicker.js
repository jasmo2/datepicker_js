import calendarHtml from './calendarHtml'

const DEFAULT_VALUES = {
  initialDate: new Date(),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

function presentCalendar ({ calendar }) {
  calendar.className += ' calendar--active'
}

function hideCalendar ({ calendar }) {
  calendar.className = calendar.className.replace('calendar--active', '')
}

function togglePresentation ({ input, calendar }) {
  input.onfocus = () => presentCalendar({ calendar })
  input.onblur = () => hideCalendar({ calendar })
}
class DatePicker {
  constructor (props) {
    this.state = {
      html: calendarHtml
    }
    this.state = Object.assign({}, this.state, DEFAULT_VALUES, props)
  }

  init () {
    let input = document.getElementById(this.state.id)
    let calendar = document.createElement('div')
    calendar.className = 'calendar'
    calendar.innerHTML = this.state.html
    input.parentElement.appendChild(calendar)
    togglePresentation({ calendar, input })
  }
}

export default DatePicker
