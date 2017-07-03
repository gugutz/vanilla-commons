import monthDays from 'month-days'
import addLeadingZero from './utils/add-leading-zero'
import {curry} from './function'
import {round} from './number'
import {mapValues} from './object'
import validateArguments from './utils/validate-arguments'

const SECOND = 1e3
const MINUTE = 6e4
const HOUR = 3.6e6
const DAY = 8.64e7
const WEEK = 6.048e8
const MONTH = 2.592e9
const YEAR = 3.1536e10

const baseDictionary = {
  YYYY: 'FullYear',
  YY: 'Year',
  MM: 'Month',
  DD: 'Date',
  HH: 'Hours',
  mm: 'Minutes',
  ss: 'Seconds'
}

const getDictionary = mode => mapValues(value => mode + value, baseDictionary)

const validKeysRegex = Object.keys(baseDictionary)
  .map((key, index, arr) => {
    const group = `(${key})`
    if (index !== arr.length - 1) {
      return group + '|'
    }
    return group
  })
  .join('')

const formatsRegex = new RegExp('{(' + validKeysRegex + ')}', 'g')

const validateDateArguments = ({functionName, args}) => {
  validateArguments({
    args,
    functionName,
    expectedTypes: ['number', 'date']
  })
}

const addMonthsWithoutValidation = (months, date) => {
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

const addDateHelper = (multiplicationFactor, functionName) =>
  curry((time, date) => {
    validateDateArguments({
      functionName,
      args: [time, date]
    })

    return new Date(date.getTime() + time * multiplicationFactor)
  })

export const addMilliseconds = addDateHelper(1, 'addMilliseconds')
export const addSeconds = addDateHelper(SECOND, 'addSeconds')
export const addMinutes = addDateHelper(MINUTE, 'addMinutes')
export const addHours = addDateHelper(HOUR, 'addHours')
export const addDays = addDateHelper(DAY, 'addDays')
export const addWeeks = addDateHelper(WEEK, 'addWeeks')

export const addMonths = curry((months, date) => {
  validateDateArguments({
    functionName: 'addMonths',
    args: [months, date]
  })

  return addMonthsWithoutValidation(months, date)
})

export const addYears = curry((years, date) => {
  validateDateArguments({
    functionName: 'addYears',
    args: [years, date]
  })

  return addMonthsWithoutValidation(years * 12, date)
})

export const diffDate = curry((firstDate, secondDate) => {
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

export const formatDate = curry((format, date) => {
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

export const parseDate = curry((format, dateStr) => {
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

    Date.prototype[getDictionary('set')[match]].call(date, value)

    numberOfDividers -= 2
    return fullMatch
  })

  return date
})

export const isValidDate = curry((format, dateStr) => {
  validateArguments({
    args: [format, dateStr],
    functionName: 'isValidDate',
    expectedTypes: ['string', 'string']
  })

  const date = parseDate(format, dateStr)

  return formatDate(format, date) === dateStr
})
