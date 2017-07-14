import typeOf from './type-of'
import errorMessage from './error-message'

export default ({expectedTypes, functionName, args}) => {
  for (let index = 0; index < args.length; index++) {
    if (expectedTypes[index] === 'optional') {
      continue
    }

    const arg = args[index]
    const types =
      typeOf(expectedTypes[index]) === 'array' ?
        expectedTypes[index] :
        [expectedTypes[index]]

    const defaultErrorMessage = {
      functionName,
      position: index + 1,
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
}
