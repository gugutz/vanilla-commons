import leapYear from 'leap-year'
import {curry} from './function'
import validateArgument from './utils/validate-argument'

const SECOND = 1e3
const MINUTE = 6e4
const HOUR = 3.6e6
const DAY = 8.64e7
const WEEK = 6.048e8
const YEAR = 3.1536e10

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

  const initialDateIsFebruaryTwentyNine = () =>
    date.getMonth() === 1 && date.getDate() === 29
  const finalDateIsLeapYear = () =>
    leapYear(date.getFullYear() + Math.ceil(months / 12))

  const finalDate = new Date(date.getTime())

  if (initialDateIsFebruaryTwentyNine() && !finalDateIsLeapYear()) {
    finalDate.setMonth(1, 28)
    return finalDate
  }

  finalDate.setMonth(date.getMonth() + months)
  console.log(date.getFullYear(), finalDate.getFullYear())
  return finalDate
})

export const addYears = addDateHelper(YEAR, 'addYears')
// Export const diffDate = () => ({})
// export const formatDate = () => ({})
// export const isValidDate = () => ({})
