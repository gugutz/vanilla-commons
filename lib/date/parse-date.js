import curry from '../function/curry'
import validateArguments from '../utils/validate-arguments'
import {formatsRegex, getDictionary} from './helpers'

export default curry((format, dateStr) => {
  validateArguments({
    args: [format, dateStr],
    functionName: 'parseDate',
    expectedTypes: ['string', 'string']
  })

  const date = new Date(0)

  let numberOfDividers = 0

  format.replace(formatsRegex, (fullMatch, ...args) => {
    const match = fullMatch.replace(/(\{)|(\})/g, '')
    const offset = args[args.length - 2] + numberOfDividers
    let value = dateStr.substr(offset, match.length)

    if (match === 'MM') {
      value--
    }

    if (match === 'YY' && Number(value) < 30) {
      date.setFullYear('20' + value)
    } else {
      Date.prototype[getDictionary('set')[match]].call(date, value)
    }

    numberOfDividers -= 2
    return fullMatch
  })

  return date
})
