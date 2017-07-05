import validateArguments from '../utils/validate-arguments'
import curry from '../function/curry'

export default curry((originalElement, newElement) => {
  validateArguments({
    args: [originalElement, newElement],
    functionName: 'replaceElement',
    expectedTypes: ['element', 'element']
  })

  originalElement.parentNode.replaceChild(newElement, originalElement)

  return newElement
})
