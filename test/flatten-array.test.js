import {flattenArray} from '../lib/array'

describe('flattenArray main functionality', () => {
  it('should flatten an array', () => {
    expect(flattenArray([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
    expect(flattenArray([1, [2, 3, 4]])).toEqual([1, 2, 3, 4])
    expect(flattenArray([[1], [2, [3, 4]]])).toEqual([1, 2, 3, 4])
    expect(flattenArray([1, [2, 3], 4])).toEqual([1, 2, 3, 4])
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

  it('should throw errors with a friendly messages', () => {
    expect(() => {
      flattenArray({})
    }).toThrow(/1st/)
    expect(() => {
      flattenArray({})
    }).toThrow(/`flattenArray`/)
    expect(() => {
      flattenArray({})
    }).toThrow(/unexpected type/)
    expect(() => {
      flattenArray({})
    }).toThrow(/array is expected/)

    expect(() => {
      flattenArray()
    }).toThrow(/1st/)
    expect(() => {
      flattenArray()
    }).toThrow(/`flattenArray`/)
    expect(() => {
      flattenArray()
    }).toThrow(/is not defined/)
    expect(() => {
      flattenArray()
    }).toThrow(/array is expected/)
  })
})
