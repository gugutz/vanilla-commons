import curry from '../function/curry'
import {addMonthsWithoutValidation, validateDateArguments} from './helpers'

export default curry((years, date) => {
  validateDateArguments({
    functionName: 'addYears',
    args: [years, date]
  })

  return addMonthsWithoutValidation(years * 12, date)
})
