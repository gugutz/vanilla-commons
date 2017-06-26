import {addWeeks} from '../lib/date'

describe('addWeeks main functionality', () => {
  it('should addWeeks of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(2, date)
    const expected = new Date('December 31, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should remove weeks of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(-2, date)
    const expected = new Date('December 03, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addWeeks(2)(date)
    const expected = new Date('December 31, 1995 03:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })
})

describe('addWeeks arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      addWeeks({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      addWeeks(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addWeeks(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      addWeeks({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      addWeeks(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addWeeks(23, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      addWeeks(23)(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addWeeks`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
