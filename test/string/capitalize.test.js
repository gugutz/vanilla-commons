import capitalize from '../../lib/string/capitalize'

describe('capitalize main functionality', () => {
  it('should capitalize a string', () => {
    expect(capitalize('string')).toBe('String')
  })

  it('should ignore strings that does not start with letters', () => {
    expect(capitalize('')).toBe('')
    expect(capitalize('\n \n')).toBe('\n \n')
    expect(capitalize(' hjhj ')).toBe(' hjhj ')
  })
})

describe('capitalize arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      capitalize({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`capitalize`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      capitalize()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`capitalize`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
