import typeOf from './type-of'
import errorMessage from './error-message'

export default ({expectedType, position, functionName, arg}) => {
  const types = typeOf(expectedType) === 'array' ? expectedType : [expectedType]

  const defaultErrorMessage = {
    functionName,
    position,
    expectedType: types.join(' or ')
  }

  if (typeOf(arg) === 'undefined') {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'notDefined'
      })
    )
  }

  const conditions = types.map(type => {
    return typeOf(arg) !== type
  })

  if (!conditions.some(condition => condition === false)) {
    throw new TypeError(
      errorMessage({
        ...defaultErrorMessage,
        messageType: 'unexpected'
      })
    )
  }
}
