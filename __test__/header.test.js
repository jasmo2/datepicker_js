import Header from '../src/js/header'
import MyDate from '../src/utils/Date'

const properties = {
  initialDate: new Date(2017,1,1),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

describe('Header Element', () => {
  describe('"headerBuiler" function', () => {
    it ('pervEl creation', () => {
      const header = new Header(properties)
      const prevEl = header.prevEl()
      expect(prevEl.className).toEqual('calendar__prev')
      expect(prevEl.innerHTML).toEqual('&lt;&lt;')
    })

    it ('monthEl creation', () => {
      const header = new Header(properties)
      const monthEl = header.monthEl()
      expect(monthEl.className).toEqual('calendar__month-name')

      const myDate = new MyDate(properties.initialDate)
      expect(monthEl.innerText).toEqual(myDate.monthName())
    })

    it ('nextEl creation', () => {
      const header = new Header(properties)
      const nextEl = header.nextEl()
      expect(nextEl.className).toEqual('calendar__next')
      expect(nextEl.innerHTML).toEqual('&gt;&gt;')
    })
  })
})
