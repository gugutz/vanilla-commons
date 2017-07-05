import curry from '../function/curry'
import validateArguments from '../utils/validate-arguments'
import {addLeadingZero} from '../utils/helpers'
import {formatsRegex, getDictionary} from './helpers'

export default curry((format, date) => {
  validateArguments({
    args: [format, date],
    functionName: 'formatDate',
    expectedTypes: ['string', 'date']
  })

  return format.replace(formatsRegex, fullMatch => {
    const match = fullMatch.replace(/(\{)|(\})/g, '')
    const num = Date.prototype[getDictionary('get')[match]].call(date)

    if (match === 'MM') {
      return addLeadingZero(num + 1, 2)
    }

    return addLeadingZero(num, 2)
  })
})
