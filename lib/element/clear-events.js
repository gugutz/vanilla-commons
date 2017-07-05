import validateArguments from '../utils/validate-arguments'
import replaceElement from './replace-element'

export default element => {
  validateArguments({
    args: [element],
    functionName: 'clearEvents',
    expectedTypes: ['element']
  })

  const clonedElement = element.cloneNode(true)

  if (element.parentNode) {
    replaceElement(element, clonedElement)
  }

  return clonedElement
}
