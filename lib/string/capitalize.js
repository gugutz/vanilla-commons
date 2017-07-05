import validateArguments from '../utils/validate-arguments'
import cleanUpString from './clean-up-string'

export default str => {
  validateArguments({
    args: [str],
    functionName: 'capitalize',
    expectedTypes: ['string']
  })

  if (cleanUpString(str) === '') {
    return str
  }

  return str[0].toUpperCase() + str.slice(1)
}
