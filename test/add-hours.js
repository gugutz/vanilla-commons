import {addHours} from '../lib/date'

describe('addHours main functionality', () => {
  it('should addHours of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(2, date)
    const expected = new Date('December 17, 1995 05:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should remove hours of a date', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(-2, date)
    const expected = new Date('December 17, 1995 01:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })

  it('should be curried', () => {
    const date = new Date('December 17, 1995 03:24:00')
    const actual = addHours(2)(date)
    const expected = new Date('December 17, 1995 05:24:00')
    expect(actual.getTime()).toBe(expected.getTime())
  })
})

describe('addHours arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      addHours({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addHours(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addHours(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addHours(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addHours(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addHours(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      addHours(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      addHours(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addHours(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      addHours({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      addHours(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addHours(23, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      addHours(23)(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addHours`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
