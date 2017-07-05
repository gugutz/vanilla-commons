import validateArguments from '../utils/validate-arguments'
import typeOf from '../utils/type-of'

export default elementsToHide => {
  validateArguments({
    args: [elementsToHide],
    functionName: 'hideElement',
    expectedTypes: [['element', 'array']]
  })

  const elements =
    typeOf(elementsToHide) === 'array' ? elementsToHide : [elementsToHide]

  elements.forEach(element => {
    element.style.display = 'none'
  })

  return elementsToHide
}
