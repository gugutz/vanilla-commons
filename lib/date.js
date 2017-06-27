import monthDays from 'month-days'
import tinydate from 'tinydate'
import {curry} from './function'
import validateArgument from './utils/validate-argument'

const SECOND = 1e3
const MINUTE = 6e4
const HOUR = 3.6e6
const DAY = 8.64e7
const WEEK = 6.048e8

const validateDateArguments = ({
  functionName,
  firstArgument,
  secondArgument
}) => {
  validateArgument({
    arg: firstArgument,
    functionName,
    position: 1,
    expectedType: 'number'
  })

  validateArgument({
    arg: secondArgument,
    functionName,
    position: 2,
    expectedType: 'date'
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
      firstArgument: time,
      secondArgument: date
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
    firstArgument: months,
    secondArgument: date
  })

  return addMonthsWithoutValidation(months, date)
})

export const addYears = curry((years, date) => {
  validateDateArguments({
    functionName: 'addYears',
    firstArgument: years,
    secondArgument: date
  })

  return addMonthsWithoutValidation(years * 12, date)
})

export const diffDate = curry((firstDate, secondDate) => {
  validateArgument({
    arg: firstDate,
    functionName: 'diffDate',
    position: 1,
    expectedType: 'date'
  })

  validateArgument({
    arg: secondDate,
    functionName: 'diffDate',
    position: 2,
    expectedType: 'date'
  })

  const diff = Math.abs(firstDate.getTime() - secondDate.getTime())

  return {
    milliseconds: diff,
    seconds: Math.round(diff / SECOND),
    minutes: Math.ceil(diff / MINUTE),
    hours: Math.ceil(diff / HOUR),
    days: Math.floor(diff / DAY),
    weeks: Math.ceil(diff / WEEK),
    months: Math.floor(diff / DAY / 30),
    years: Math.abs(firstDate.getFullYear() - secondDate.getFullYear())
  }
})
export const formatDate = format => {
  validateArgument({
    arg: format,
    functionName: 'formatDate',
    position: 1,
    expectedType: 'string'
  })

  const stamp = tinydate(format)

  return date => {
    validateArgument({
      arg: date,
      functionName: 'formatDate',
      position: 2,
      expectedType: 'date'
    })

    return stamp(date)
  }
}

// export const isValidDate = () => ({})
