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
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      pipe({})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      pipe(null)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      pipe(42)({})
    }).toThrow(TypeError)
    expect(() => {
      pipe(42)(null)
    }).toThrow(TypeError)
    expect(() => {
      pipe(42)(42)
    }).toThrow(TypeError)
    expect(() => {
      pipe(42)(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      pipe(undefined)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      pipe(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      pipe({}, () => {})('hey')
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      pipe(undefined, () => {})('jey')
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      pipe(() => {}, {})('hey')
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      pipe(() => {}, undefined)('hey')
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the third argument has an unexpected type', () => {
    const expected = expect(() => {
      pipe(a => a, a => a, {})('hey')
    })

    expected.toThrow(/3rd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the third argument is not defined', () => {
    const expected = expect(() => {
      pipe(() => {}, a => a, undefined)('hey')
    })

    expected.toThrow(/3rd/)
    expected.toThrow(/`pipe`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
