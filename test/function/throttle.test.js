import throttle from '../../lib/function/throttle'

jest.useFakeTimers()

describe('throttle main functionality', () => {
  it('should run only one time every 200ms', () => {
    const callback = jest.fn()

    const throttled = throttle(200, callback)

    throttled()
    throttled()

    jest.runTimersToTime(200)

    expect(callback.mock.calls.length).toBe(1)

    throttled()
    throttled()

    jest.runTimersToTime(400)

    expect(callback.mock.calls.length).toBe(2)
  })

  it('should be curried', () => {
    const callback = jest.fn()

    const throttled = throttle(200)(callback)

    throttled()
    throttled()

    jest.runTimersToTime(200)

    expect(callback.mock.calls.length).toBe(1)
  })

  it('should pass the arguments through throttled function', () => {
    const callback = jest.fn()

    const throttled = throttle(200)(callback)
    const arg = {
      target: 'hey'
    }

    throttled(arg)

    jest.runTimersToTime(200)

    expect(callback.mock.calls.length).toBe(1)
    expect(callback.mock.calls[0][0]).toBe(arg)
  })
})

describe('throttle arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      throttle({}, () => {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      throttle(undefined, () => {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      throttle(42, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      throttle(42, undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
