import {addDays} from '../lib/date'

describe('addDays main functionality', () => {
  it('should addDays of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(6, date)
    const expected = new Date('December 23, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should remove days of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(-6, date)
    const expected = new Date('December 11, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addDays(6)(date)
    const expected = new Date('December 23, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })
})

describe('addDays arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      addDays({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addDays(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addDays(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addDays(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addDays(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addDays(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      addDays(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      addDays(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addDays(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      addDays({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      addDays(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addDays(23, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      addDays(23)(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addDays`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
