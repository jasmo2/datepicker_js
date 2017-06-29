import CalendarDates from '../src/js/dates'

const properties = {
  initialDate: new Date(),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

describe('CalendarDates Class', () => {
  describe('the constructor', () => {
    it ('get rows String', () => {
      const calendar = new CalendarDates(properties)
      const { rowsHtml } = calendar.rows({ initialDate: properties.initialDate })
      expect((rowsHtml.match(/calendar__row/g) || []).length).toEqual(6)
    })
  })
})
