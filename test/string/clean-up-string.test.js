import cleanUpString from '../../lib/string/clean-up-string'

describe('cleanUpString main functionality', () => {
  it('should clean up a string', () => {
    expect(cleanUpString('str\ning ')).toBe('string')
    expect(cleanUpString('')).toBe('')
    expect(cleanUpString('\n \n\r \r\n')).toBe('')
    expect(cleanUpString('\n \n\r hjhj ')).toBe('hjhj')
  })
})

describe('cleanUpString arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      cleanUpString({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`cleanUpString`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      cleanUpString()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`cleanUpString`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
