const DEFAULT_VALUES = {
  initialDate: new Date(),
  start: (new Date()).getFullYear(),
  end: (new Date()).getFullYear()
}

export default (props) => {
  const newProps = Object.assign({}, DEFAULT_VALUES, props)
  
}
