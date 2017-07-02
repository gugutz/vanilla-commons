import kindOf from 'kind-of'
import isDom from 'is-dom'
import errorMessage from './error-message'

export default ({expectedType, position, functionName, arg}) => {
  const types = kindOf(expectedType) === 'array' ? expectedType : [expectedType]

  const defaultErrorMessage = {
    functionName,
    position,
    expectedType: types.join(' or ')
  }

  if (kindOf(arg) === 'undefined') {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'notDefined'
      })
    )
  }

  let conditions = []
  for (expectedType of types) {
    const isElement = argument => (isDom(argument) ? 'element' : null)
    const getType = expectedType === 'element' ? isElement : kindOf

    conditions.push(getType(arg) !== expectedType)
  }

  if (!conditions.some(condition => condition === false)) {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'unexpected'
      })
    )
  }
}
