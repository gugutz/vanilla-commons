import {compose} from '../lib/function'
import {
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  formatDate
} from '../lib/date'

describe('compose main functionality', () => {
  it('should compose a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = compose(
      formatDate(format),
      addYears(-2),
      addMonths(-9),
      addDays(7),
      addHours(9),
      addMinutes(1)
    )(date)
    const expected = '24/03/1993 12:25:00'
    expect(actual).toBe(expected)
  })
})

describe('compose arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      compose({}, () => {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      compose(undefined, () => {})('jey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      compose('{YYYY}', {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      compose(() => {}, undefined)('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the third argument has an unexpected type', () => {
    const expected = expect(() => {
      compose(a => a, a => a, {})('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/3rd/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the third argument is not defined', () => {
    const expected = expect(() => {
      compose(() => {}, a => a, undefined)('hey')
    })

    expected.toThrow(TypeError)
    expected.toThrow(/3rd/)
    expected.toThrow(/`compose`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
