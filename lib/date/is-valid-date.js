import curry from '../function/curry'
import validateArguments from '../utils/validate-arguments'
import parseDate from './parse-date'
import formatDate from './format-date'

export default curry((format, dateStr) => {
  validateArguments({
    args: [format, dateStr],
    functionName: 'isValidDate',
    expectedTypes: ['string', 'string']
  })

  const date = parseDate(format, dateStr)

  return formatDate(format, date) === dateStr
})
