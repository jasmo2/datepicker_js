const header = `
  <div class="calendar__prev">&lt;&lt;</div>
  <div class="calendar__month-name">June</div>
  <div class="calendar__next">&gt;&gt;</div>
`
class CalendarHeader {
  constructor (props = {}) {
    let headerEl = document.createElement('div')
    headerEl.className = 'calendar__month'
    headerEl.innerHTML = header
    return headerEl
  }
}

export default CalendarHeader
