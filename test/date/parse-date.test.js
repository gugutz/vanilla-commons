import parseDate from '../../lib/date/parse-date'

describe('parseDate main functionality', () => {
  it('should parse a date', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}'
    const actual = parseDate(format, dateStr)
    const expected = new Date('December 17, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}'
    const actual = parseDate(format)(dateStr)
    const expected = new Date('December 17, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should handle short year formats of 20th century', () => {
    const dateStr = '17/12/89 03:24:00'
    const format = '{DD}/{MM}/{YY} {HH}:{mm}:{ss}:{ms}'
    const actual = parseDate(format)(dateStr)
    const expected = new Date('December 17, 1989 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should handle short year formats of 21st century', () => {
    const dateStr = '17/12/17 03:24:00'
    const format = '{DD}/{MM}/{YY} {HH}:{mm}:{ss}:{ms}'
    const actual = parseDate(format)(dateStr)
    const expected = new Date('December 17, 2017 03:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('parseDate arguments validation errors', () => {
  it('should throw an error with a friendly message has an unexpected type', () => {
    const expected = expect(() => {
      parseDate({})(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      parseDate(undefined)(new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      parseDate('{YYYY}')({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      parseDate('{YYYY}')(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
