import addSeconds from '../../lib/date/add-seconds'

describe('addSeconds main functionality', () => {
  it('should add seconds on a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addSeconds(60, date)
    const expected = new Date('December 17, 1995 03:25:00')
    expect(actual).toEqual(expected)
  })

  it('should remove seconds of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addSeconds(-60, date)
    const expected = new Date('December 17, 1995 03:23:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addSeconds(60)(date)
    const expected = new Date('December 17, 1995 03:25:00')
    expect(actual).toEqual(expected)
  })
})

describe('addSeconds arguments validation errors', () => {
  it('should throw an error with a friendly message whe the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addSeconds({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addSeconds`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addSeconds(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addSeconds`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addSeconds(23, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addSeconds`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addSeconds(23)(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addSeconds`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
