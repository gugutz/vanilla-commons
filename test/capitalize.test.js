import {capitalize} from '../lib/string'

describe('capitalize main functionality', () => {
  it('should capitalize string', () => {
    expect(capitalize('string')).toEqual('String')
  })

  it('should ignore strings that does not start with letters', () => {
    expect(capitalize('')).toEqual('')
    expect(capitalize('\n \n')).toEqual('\n \n')
    expect(capitalize(' hjhj ')).toEqual(' hjhj ')
  })
})

describe('capitalize arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      capitalize({})
    }).toThrow(TypeError)
    expect(() => {
      capitalize(null)
    }).toThrow(TypeError)
    expect(() => {
      capitalize(42)
    }).toThrow(TypeError)
    expect(() => {
      capitalize(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      capitalize()
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      capitalize({})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`capitalize`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      capitalize()
    })
    expected.toThrow(/1st/)
    expected.toThrow(/`capitalize`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })
})
