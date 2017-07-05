import curry from '../function/curry'
import {addMonthsWithoutValidation, validateDateArguments} from './helpers'

export default curry((months, date) => {
  validateDateArguments({
    functionName: 'addMonths',
    args: [months, date]
  })

  return addMonthsWithoutValidation(months, date)
})
