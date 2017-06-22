import kindOf from 'kind-of'
import validateArgument from './utils/validate-argument'

export const flattenArray = (
  arr,
  {escapeValidation} = {escapeValidation: false}
) => {
  if (!escapeValidation) {
    validateArgument({
      arg: arr,
      functionName: 'flattenArray',
      position: 1,
      expectedType: 'array'
    })
  }

  return arr.reduce((acc, value) => {
    if (kindOf(value) === 'array') {
      return acc.concat(flattenArray(value, {escapeValidation: true}))
    }

    return acc.concat(value)
  }, [])
}
