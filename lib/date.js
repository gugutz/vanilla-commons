import {curry} from './function'
import validateArgument from './utils/validate-argument'

const SECOND = 1e3
const MINUTE = 6e4
const HOUR = 3.6e6
const DAY = 8.64e7
const WEEK = 6.048e8

const addDateHelper = (multiplicationFactor, functionName) =>
  curry((time, date) => {
    validateArgument({
      arg: time,
      functionName,
      position: 1,
      expectedType: 'number'
    })

    validateArgument({
      arg: date,
      functionName,
      position: 2,
      expectedType: 'date'
    })

    return new Date(date.getTime() + time * multiplicationFactor)
  })

export const addMilliseconds = addDateHelper(1, 'addMilliseconds')
export const addSeconds = addDateHelper(SECOND, 'addSeconds')
export const addMinutes = addDateHelper(MINUTE, 'addMinutes')
export const addHours = addDateHelper(HOUR, 'addHours')
export const addDays = addDateHelper(DAY, 'addDays')
export const addWeeks = addDateHelper(WEEK, 'addWeeks')

// Export const addMonths = () => ({})
// export const addYears = () => ({})
// export const diffDate = () => ({})
// export const formatDate = () => ({})
// export const isValidDate = () => ({})
