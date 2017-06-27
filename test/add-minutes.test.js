import {addMinutes} from '../lib/date'

describe('addMinutes main functionality', () => {
  it('should addMinutes of a date', () => {
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
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      addMinutes({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      addMinutes(undefined, new Date())
    }).toThrow(TypeError)
    expect(() => {
      addMinutes(23)(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages has an unexpected type', () => {
    const expected = expect(() => {
      addMinutes({}, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      addMinutes(undefined, new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addMinutes(23, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/date is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      addMinutes(23)(undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addMinutes`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/date is expected/)
  })
})
