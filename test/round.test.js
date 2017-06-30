import {round} from '../lib/number'

describe('round main functionality', () => {
  it('should return a number with two decimal places', () => {
    expect(round(2)).toBe(2)
    expect(round(Math.E)).toBe(2.72)
    expect(round(Math.LN10)).toBe(2.3)
    expect(round(Math.LN2)).toBe(0.69)
    expect(round(Math.PI)).toBe(3.14)
  })

  it('should handle negative numbers', () => {
    expect(round(-27.817987)).toBe(-27.82)
    expect(round(-28.8)).toBe(-28.8)
    expect(round(-27)).toBe(-27)
  })
})

describe('round arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      round({})
    }).toThrow(TypeError)
    expect(() => {
      round(null)
    }).toThrow(TypeError)
    expect(() => {
      round(() => {})
    }).toThrow(TypeError)
    expect(() => {
      round({})
    }).toThrow(TypeError)
    expect(() => {
      round(null)
    }).toThrow(TypeError)
    expect(() => {
      round(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the argument is not defined', () => {
    expect(() => {
      round(undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the argument has an unexpected type', () => {
    const expected = expect(() => {
      round(new Date())
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`round`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the argument is not defined', () => {
    const expected = expect(() => {
      round(undefined)
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`round`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })
})
