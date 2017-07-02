import {formatDate} from '../lib/date'

describe('formatDate main functionality', () => {
  it('should format a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = formatDate(format, date)
    const expected = '17/12/1995 03:24:00'
    expect(actual).toBe(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = formatDate(format)(date)
    const expected = '17/12/1995 03:24:00'
    expect(actual).toBe(expected)
  })
})

describe('formatDate arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      formatDate({})(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      formatDate(undefined)(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      formatDate('{YYYY}')({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      formatDate('{YYYY}')(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
