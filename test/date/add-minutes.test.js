import addMinutes from '../../lib/date/add-minutes'

describe('addMinutes main functionality', () => {
  it('should add minutes on a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMinutes(60, date)
    const expected = new Date('December 17, 1995 04:24:00')
    expect(actual).toEqual(expected)
  })

  it('should remove minutes of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMinutes(-60, date)
    const expected = new Date('December 17, 1995 02:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMinutes(60)(date)
    const expected = new Date('December 17, 1995 04:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('addMinutes arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addMinutes({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addMinutes(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addMinutes(23, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addMinutes(23)(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
