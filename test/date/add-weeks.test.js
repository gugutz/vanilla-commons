import addWeeks from '../../lib/date/add-weeks'

describe('addWeeks main functionality', () => {
  it('should add weeks on a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(2, date)
    const expected = new Date('December 31, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should remove weeks of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(-2, date)
    const expected = new Date('December 03, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(2)(date)
    const expected = new Date('December 31, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('addWeeks arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addWeeks({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addWeeks(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addWeeks(23, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addWeeks(23)(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
