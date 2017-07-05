import addDays from '../../lib/date/add-days'

describe('addDays main functionality', () => {
  it('should add days on a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(6, date)
    const expected = new Date('December 23, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should remove days of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(-6, date)
    const expected = new Date('December 11, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(6)(date)
    const expected = new Date('December 23, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('addDays arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addDays({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addDays(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addDays(23, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addDays(23)(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
