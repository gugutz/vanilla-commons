import validateArguments from '../utils/validate-arguments'
import curry from '../function/curry'

export default curry((referenceElement, newElement) => {
  validateArguments({
    args: [referenceElement, newElement],
    functionName: 'insertElementAfter',
    expectedTypes: ['element', 'element']
  })

  referenceElement.parentNode.insertBefore(
    newElement,
    referenceElement.nextSibling
  )

  return newElement
})
