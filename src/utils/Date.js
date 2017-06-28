class MyDate {
  constructor (props) {
    this.date = props
    this.daysInMonth = this.daysInMonth.bind(this)
    this.daysPrevInMonth = this.daysPrevInMonth.bind(this)
  }

  daysInMonth () {
    const { date } = this
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }
  daysPrevInMonth () {
    const { date } = this
    return new Date(date.getFullYear(), date.getMonth(), 0).getDate()
  }
}

export default MyDate
