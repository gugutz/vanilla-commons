import typeOf from './utils/type-of'
import validateArguments from './utils/validate-arguments'

/**
 * Flatten nested arrays.
 * @param {Array} arr - Nested array.
 * @returns {Array} flattened.
 * @example
 * // returns [1, 2, 3, 4]
 * flattenArray([[1], [2, [3, 4]]])
 */
export const flattenArray = (
  arr,
  {escapeValidation} = {escapeValidation: false}
) => {
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
