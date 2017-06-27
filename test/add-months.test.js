import {addMonths} from '../lib/date'

describe('addMonths main functionality', () => {
  it('should addMonths of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMonths(2, date)
    const expected = new Date('February 17, 1996 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should remove months of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMonths(-2, date)
    const expected = new Date('October 17, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addMonths(2)(date)
    const expected = new Date('February 17, 1996 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should go to the last day of the month if the next month doesn\'t have enough days', () => {
    const date = new Date('July 31, 1995 03:24:00')
    const actual = addMonths(-1, date)
    const expected = new Date('June 30, 1995 03:24:00')
    expect(actual).toEqual(expected)
  })

  it('should handle 29 February in leap years', () => {
    const date = new Date('February 29, 2016 03:24:00')
    const actual = addMonths(12, date)
    const expected = new Date('February 28, 2017 03:24:00')
    expect(actual).toEqual(expected)
  })
})

describe('addMonths arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      addMonths({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMonths(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMonths(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMonths(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addMonths(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addMonths(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      addMonths(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      addMonths(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMonths(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      addMonths({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addMonths`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      addMonths(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addMonths`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addMonths(23, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addMonths`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      addMonths(23)(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addMonths`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
