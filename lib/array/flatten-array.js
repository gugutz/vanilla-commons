import typeOf from '../utils/type-of'
import validateArguments from '../utils/validate-arguments'

const flattenArray = (arr, {escapeValidation} = {escapeValidation: false}) => {
  if (!escapeValidation) {
    validateArguments({
      args: [arr],
      functionName: 'flattenArray',
      expectedTypes: ['array']
    })
  }

  return arr.reduce((acc, value) => {
    if (typeOf(value) === 'array') {
      return acc.concat(flattenArray(value, {escapeValidation: true}))
    }

    return acc.concat(value)
  }, [])
}

export default flattenArray
