import diffDate from '../../lib/date/diff-date'

describe('diffDate main functionality', () => {
  it('should show the diff of two dates', () => {
    const firstDate = new Date('December 17, 1995 03:24:00')
    const secondDate = new Date('December 17, 1996 03:25:00')
    const actual = diffDate(firstDate, secondDate)
    const expected = {
      milliseconds: 31622460000,
      seconds: 31622460,
      minutes: 527041,
      hours: 8784.02,
      days: 366,
      weeks: 52.29,
      months: 12.2,
      years: 1
    }
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const firstDate = new Date('December 17, 1995 03:24:00')
    const secondDate = new Date('December 17, 1996 03:25:00')
    const actual = diffDate(firstDate)(secondDate)
    const expected = {
      milliseconds: 31622460000,
      seconds: 31622460,
      minutes: 527041,
      hours: 8784.02,
      days: 366,
      weeks: 52.29,
      months: 12.2,
      years: 1
    }
    expect(actual).toEqual(expected)
  })
})

describe('diffDate arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      diffDate({}, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      diffDate(undefined, new Date())
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      diffDate(new Date(), {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      diffDate(new Date())(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
