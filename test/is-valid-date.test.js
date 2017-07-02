import {isValidDate} from '../lib/date'

describe('isValidDate main functionality', () => {
  it('should return true if the date is valid', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = isValidDate(format, dateStr)
    expect(actual).toBe(true)
  })

  it('should return false if the date is not valid', () => {
    const dateStr = '29/02/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = isValidDate(format, dateStr)
    expect(actual).toBe(false)
  })

  it('should be curried', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = isValidDate(format)(dateStr)
    expect(actual).toBe(true)
  })
})

describe('isValidDate arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      isValidDate({})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(null)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(() => {})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(42)({})
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(42)(null)
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(42)(42)
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(42)(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      isValidDate(undefined)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      isValidDate(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      isValidDate({})(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      isValidDate(undefined)(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      isValidDate('{YYYY}')({})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      isValidDate('{YYYY}')(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
