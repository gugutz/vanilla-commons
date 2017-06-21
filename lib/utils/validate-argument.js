import kindOf from 'kind-of'
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

  if (kindOf(arg) !== expectedType) {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'unexpected'
      })
    )
  }
}
