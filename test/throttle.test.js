import {throttle} from '../lib/function'

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
})

describe('throttle arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      throttle({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      throttle(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      throttle(42, {})
    }).toThrow(TypeError)
    expect(() => {
      throttle(42, null)
    }).toThrow(TypeError)
    expect(() => {
      throttle(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      throttle(undefined, () => {})
    }).toThrow(TypeError)
    expect(() => {
      throttle(23, undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      throttle({}, () => {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      throttle(undefined, () => {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/number is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      throttle(42, {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      throttle(42, undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`throttle`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })
})
