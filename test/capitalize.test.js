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

  it('should throw errors with a friendly messages', () => {
    expect(() => {
      capitalize({})
    }).toThrow(/1st/)
    expect(() => {
      capitalize({})
    }).toThrow(/`capitalize`/)
    expect(() => {
      capitalize({})
    }).toThrow(/unexpected type/)
    expect(() => {
      capitalize({})
    }).toThrow(/string is expected/)

    expect(() => {
      capitalize()
    }).toThrow(/1st/)
    expect(() => {
      capitalize()
    }).toThrow(/`capitalize`/)
    expect(() => {
      capitalize()
    }).toThrow(/is not defined/)
    expect(() => {
      capitalize()
    }).toThrow(/string is expected/)
  })
})
