import mapValues from '../object/map-values'
import {monthDays} from '../utils/helpers'
import curry from '../function/curry'
import validateArguments from '../utils/validate-arguments'

export const SECOND = 1e3
export const MINUTE = 6e4
export const HOUR = 3.6e6
export const DAY = 8.64e7
export const WEEK = 6.048e8
export const MONTH = 2.592e9
export const YEAR = 3.1536e10

export const baseDictionary = {
  YYYY: 'FullYear',
  YY: 'Year',
  MM: 'Month',
  DD: 'Date',
  HH: 'Hours',
  mm: 'Minutes',
  ss: 'Seconds'
}

export const getDictionary = mode =>
  mapValues(value => mode + value, baseDictionary)

export const validKeysRegex = Object.keys(baseDictionary)
  .map((key, index, arr) => {
    const group = `(${key})`
    if (index !== arr.length - 1) {
      return group + '|'
    }
    return group
  })
  .join('')

export const formatsRegex = new RegExp('{(' + validKeysRegex + ')}', 'g')

export const validateDateArguments = ({functionName, args}) => {
  validateArguments({
    args,
    functionName,
    expectedTypes: ['number', 'date']
  })
}

export const addMonthsWithoutValidation = (months, date) => {
  const monthsAhead = date.getMonth() + months
  const finalDate = new Date(0)
  finalDate.setFullYear(date.getFullYear(), monthsAhead, 1)
  finalDate.setHours(
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  )
  const daysInMonth = monthDays(finalDate.getMonth(), finalDate.getFullYear())
  finalDate.setDate(Math.min(daysInMonth, date.getDate()))
  return finalDate
}

export const addDateHelper = (multiplicationFactor, functionName) =>
  curry((time, date) => {
    validateDateArguments({
      functionName,
      args: [time, date]
    })

    return new Date(date.getTime() + time * multiplicationFactor)
  })
