import {formatDate} from '../lib/date'

describe('formatDate main functionality', () => {
  it('should formatDate of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'
    const actual = formatDate(format)(date)
    const expected = '17/12/1995 03:24:00'
    expect(actual).toBe(expected)
  })
})

describe('formatDate arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      formatDate({})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      formatDate(null)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      formatDate(() => {})(new Date())
    }).toThrow(TypeError)
    expect(() => {
      formatDate(42)({})
    }).toThrow(TypeError)
    expect(() => {
      formatDate(42)(null)
    }).toThrow(TypeError)
    expect(() => {
      formatDate(42)(42)
    }).toThrow(TypeError)
    expect(() => {
      formatDate(42)(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      formatDate(undefined)(new Date())
    }).toThrow(TypeError)
    expect(() => {
      formatDate(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      formatDate({})(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      formatDate(undefined)(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      formatDate('{YYYY}')({})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      formatDate('{YYYY}')(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`formatDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
