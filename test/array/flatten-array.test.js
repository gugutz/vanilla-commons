import flattenArray from '../../lib/array/flatten-array'

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
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      flattenArray({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`flattenArray`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is undefined', () => {
    const expected = expect(() => {
      flattenArray()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`flattenArray`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/array is expected/)
  })
})
