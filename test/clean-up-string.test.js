import {cleanUpString} from '../lib/string'

describe('cleanUpString main functionality', () => {
  it('should cleanUpString string', () => {
    expect(cleanUpString('str\ning ')).toBe('string')
    expect(cleanUpString('')).toBe('')
    expect(cleanUpString('\n \n\r \r\n')).toBe('')
    expect(cleanUpString('\n \n\r hjhj ')).toBe('hjhj')
  })
})

describe('cleanUpString arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      cleanUpString({})
    }).toThrow(TypeError)
    expect(() => {
      cleanUpString(null)
    }).toThrow(TypeError)
    expect(() => {
      cleanUpString(42)
    }).toThrow(TypeError)
    expect(() => {
      cleanUpString(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      cleanUpString()
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      cleanUpString({})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`cleanUpString`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      cleanUpString()
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`cleanUpString`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
