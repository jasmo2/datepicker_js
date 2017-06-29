import CalendarDates from '../src/js/dates'

const properties = {
  initialDate: new Date(2017,1,1),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

describe('CalendarDates Class', () => {
  describe('"rows" function', () => {
    it ('count rows', () => {
      const calendar = new CalendarDates(properties)
      const { rowsHtml } = calendar.rows({ initialDate: properties.initialDate })
      expect((rowsHtml.match(/calendar__row/g) || []).length).toEqual(6)
    })
    it ('get 31 days for Jan', () => {
      const calendar = new CalendarDates(properties)
      const { rowsHtml } = calendar.rows({ initialDate: properties.initialDate })
      const janDays = Array.from({length: 31}, (v, k) => `${k + 1}`)

      expect(rowsHtml.match(/\d+/g)).toEqual(expect.arrayContaining(janDays))
    })
  })
})
