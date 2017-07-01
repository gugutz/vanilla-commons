import {parseDate} from '../lib/date'

describe('parseDate main functionality', () => {
  it('should parse a date', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = parseDate(format, dateStr)
    const expected = new Date('December 17, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const dateStr = '17/12/1995 03:24:00'
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = parseDate(format)(dateStr)
    const expected = new Date('December 17, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('parseDate arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      parseDate({})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      parseDate(null)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      parseDate(() => {})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      parseDate(42)({})
    }).toThrow(TypeError)
    expect(() => {
      parseDate(42)(null)
    }).toThrow(TypeError)
    expect(() => {
      parseDate(42)(42)
    }).toThrow(TypeError)
    expect(() => {
      parseDate(42)(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      parseDate(undefined)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      parseDate(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      parseDate({})(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      parseDate(undefined)(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      parseDate('{YYYY}')({})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      parseDate('{YYYY}')(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`parseDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
