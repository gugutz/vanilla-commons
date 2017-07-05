import curry from '../function/curry'
import round from '../number/round'
import mapValues from '../object/map-values'
import validateArguments from '../utils/validate-arguments'
import {SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR} from './helpers'

export default curry((firstDate, secondDate) => {
  validateArguments({
    args: [firstDate, secondDate],
    functionName: 'diffDate',
    expectedTypes: ['date', 'date']
  })

  const diff = Math.abs(firstDate.getTime() - secondDate.getTime())

  const exactDiffs = {
    milliseconds: diff,
    seconds: diff / SECOND,
    minutes: diff / MINUTE,
    hours: diff / HOUR,
    days: diff / DAY,
    weeks: diff / WEEK,
    months: diff / MONTH,
    years: diff / YEAR
  }

  return mapValues(round, exactDiffs)
})
