import isValidDate from '../../lib/date/is-valid-date'

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
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      isValidDate({})(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      isValidDate(undefined)(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      isValidDate('{YYYY}')({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      isValidDate('{YYYY}')(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`isValidDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
