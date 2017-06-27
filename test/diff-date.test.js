import {diffDate} from '../lib/date'

describe('diffDate main functionality', () => {
  it('should diffDate of a date', () => {
    const firstDate = new Date('December 17, 1995 03:24:00')
    const secondDate = new Date('December 17, 1996 03:25:00')
    const actual = diffDate(firstDate, secondDate)
    const expected = {
      milliseconds: 31622460000,
      seconds: 31622460,
      minutes: 527041,
      hours: 8785,
      days: 366,
      weeks: 53,
      months: 12,
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
      hours: 8785,
      days: 366,
      weeks: 53,
      months: 12,
      years: 1
    }
    expect(actual).toEqual(expected)
  })
})

describe('diffDate arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      diffDate({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      diffDate(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      diffDate(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      diffDate(42, {})
    }).toThrow(TypeError)
    expect(() => {
      diffDate(42, null)
    }).toThrow(TypeError)
    expect(() => {
      diffDate(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      diffDate(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      diffDate(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      diffDate(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      diffDate({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      diffDate(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      diffDate(new Date(), {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      diffDate(new Date())(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`diffDate`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
