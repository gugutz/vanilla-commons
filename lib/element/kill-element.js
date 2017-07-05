import validateArguments from '../utils/validate-arguments'
import typeOf from '../utils/type-of'

export default elementsToKill => {
  validateArguments({
    args: [elementsToKill],
    functionName: 'killElement',
    expectedTypes: [['element', 'array']]
  })

  const elements =
    typeOf(elementsToKill) === 'array' ? elementsToKill : [elementsToKill]

  elements.forEach(element => {
    element.parentNode.removeChild(element)
  })
}
