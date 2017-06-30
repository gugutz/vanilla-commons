import kindOf from 'kind-of'
import isDom from 'is-dom'
import errorMessage from './error-message'

export default ({expectedType, position, functionName, arg}) => {
  const defaultErrorMessage = {
    functionName,
    position,
    expectedType
  }

  if (kindOf(arg) === 'undefined') {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'notDefined'
      })
    )
  }

  const isElement = argument => (isDom(argument) ? 'element' : null)
  const getType = expectedType === 'element' ? isElement : kindOf

  if (getType(arg) !== expectedType) {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'unexpected'
      })
    )
  }
}
