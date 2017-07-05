import curry from '../../lib/function/curry'

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
  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      curry({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`curry`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the first argument has a unexpected type', () => {
    const expected = expect(() => {
      curry()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`curry`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
