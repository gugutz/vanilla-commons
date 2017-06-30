import {curry} from '../lib/function'

describe('curry main functionality', () => {
  it('should curry a function with two arguments', () => {
    const add = (a, b) => a + b

    expect(typeof curry(add)).toBe('function')
    expect(typeof curry(add, 2)).toBe('function')

    expect(curry(add, 2, 2)).toBe(4)
    expect(curry(add)(2, 2)).toBe(4)
    expect(curry(add)(2)(2)).toBe(4)
    expect(curry(add)(2)(2)).toBe(4)
  })

  it('should curry a function with three arguments', () => {
    const formula = (a, b, c) => a * b + c

    expect(typeof curry(formula)).toBe('function')
    expect(typeof curry(formula, 2)).toBe('function')
    expect(typeof curry(formula, 2, 2)).toBe('function')
    expect(typeof curry(formula)(2)(2)).toBe('function')

    expect(curry(formula, 2, 2, 2)).toBe(6)
    expect(curry(formula)(2, 2, 2)).toBe(6)
    expect(curry(formula, 2)(2, 2)).toBe(6)
    expect(curry(formula)(2)(2, 2)).toBe(6)
    expect(curry(formula)(2, 2)(2)).toBe(6)
    expect(curry(formula)(2, 2)(2)).toBe(6)
    expect(curry(formula)(2)(2)(2)).toBe(6)
    expect(curry(formula)(2)(2)(2)).toBe(6)
  })
})

describe('curry arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      curry({})
    }).toThrow(TypeError)
    expect(() => {
      curry(null)
    }).toThrow(TypeError)
    expect(() => {
      curry(42)
    }).toThrow(TypeError)
    expect(() => {
      curry('hey')
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      curry()
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      curry({})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`curry`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the first argument has a unexpected type', () => {
    const expected = expect(() => {
      curry()
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`curry`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
