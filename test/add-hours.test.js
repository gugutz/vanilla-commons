import {addHours} from '../lib/date'

describe('addHours main functionality', () => {
  it('should add hours on a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(2, date)
    const expected = new Date('December 17, 1995 05:24:00')
    expect(actual).toEqual(expected)
  })

  it('should remove hours of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(-2, date)
    const expected = new Date('December 17, 1995 01:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(2)(date)
    const expected = new Date('December 17, 1995 05:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('addHours arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addHours({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addHours(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addHours(23, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addHours(23)(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
