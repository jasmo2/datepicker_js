import DatePicker from './js/datepicker'

const datepicker = new DatePicker({start: 5050, id: 'my-calendar'})

window.onload = () => datepicker.init()
