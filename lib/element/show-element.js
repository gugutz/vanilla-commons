import validateArguments from '../utils/validate-arguments'
import typeOf from '../utils/type-of'

export default elementsToShow => {
  validateArguments({
    args: [elementsToShow],
    functionName: 'showElement',
    expectedTypes: [['element', 'array']]
  })

  const elements =
    typeOf(elementsToShow) === 'array' ? elementsToShow : [elementsToShow]

  elements.forEach(element => {
    element.style.display = 'block'
  })

  return elementsToShow
}
