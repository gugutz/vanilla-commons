import {pipe} from '../lib/function'
import {
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  formatDate
} from '../lib/date'

describe('pipe main functionality', () => {
  it('should pipe of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = pipe(
      addMinutes(1),
      addHours(9),
      addDays(7),
      addMonths(-9),
      addYears(-2),
      formatDate(format)
    )(date)
    const expected = '24/03/1993 12:25:00'
    expect(actual).toBe(expected)
  })
})

describe('pipe arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      pipe({}, () => {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      pipe(undefined, () => {})('jey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      pipe(() => {}, {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      pipe(() => {}, undefined)('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the third argument has an unexpected type', () => {
    const expected = expect(() => {
      pipe(a => a, a => a, {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/3rd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the third argument is not defined', () => {
    const expected = expect(() => {
      pipe(() => {}, a => a, undefined)('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/3rd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
