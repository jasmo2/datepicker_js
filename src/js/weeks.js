const weeks = `
  <div class="calendar__days">Su</div>
  <div class="calendar__days">Mo</div>
  <div class="calendar__days">Tu</div>
  <div class="calendar__days">We</div>
  <div class="calendar__days">Th</div>
  <div class="calendar__days">Fr</div>
  <div class="calendar__days">Sa</div>
`

const CalendarWeeks = () => {
  let weeksEl = document.createElement('div')
  weeksEl.className = 'calendar__week-days'
  weeksEl.innerHTML = weeks
  return weeksEl
}
export default CalendarWeeks
