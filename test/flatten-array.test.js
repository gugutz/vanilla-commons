import {flattenArray} from '../lib/array'

describe('flattenArray main functionality', () => {
  it('should flatten an array', () => {
    const expected = [1, 2, 3, 4]
    expect(flattenArray([1, 2, 3, 4])).toEqual(expected)
    expect(flattenArray([1, [2, 3, 4]])).toEqual(expected)
    expect(flattenArray([[1], [2, [3, 4]]])).toEqual(expected)
    expect(flattenArray([1, [2, 3], 4])).toEqual(expected)
  })
})

describe('flattenArray arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      flattenArray({})
    }).toThrow(TypeError)
    expect(() => {
      flattenArray(null)
    }).toThrow(TypeError)
    expect(() => {
      flattenArray(42)
    }).toThrow(TypeError)
    expect(() => {
      flattenArray(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      flattenArray()
    }).toThrow(TypeError)
  })

  it('should throw errors with a friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      flattenArray({})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`flattenArray`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/array is expected/)
  })

  it('should throw errors with a friendly messages when the first argument is undefined', () => {
    const expected = expect(() => {
      flattenArray()
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`flattenArray`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/array is expected/)
  })
})
