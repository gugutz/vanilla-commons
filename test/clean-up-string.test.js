import {cleanUpString} from '../lib/string'

describe('cleanUpString main functionality', () => {
  it('should cleanUpString string', () => {
    expect(cleanUpString('str\ning ')).toEqual('string')
    expect(cleanUpString('')).toEqual('')
    expect(cleanUpString('\n \n\r \r\n')).toEqual('')
    expect(cleanUpString('\n \n\r hjhj ')).toEqual('hjhj')
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
      cleanUpString(function () {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      cleanUpString()
    }).toThrow(TypeError)
  })

  it('should throw errors with a friendly messages', () => {
    expect(() => {
      cleanUpString({})
    }).toThrow(/1st/)
    expect(() => {
      cleanUpString({})
    }).toThrow(/`cleanUpString`/)
    expect(() => {
      cleanUpString({})
    }).toThrow(/unexpected type/)
    expect(() => {
      cleanUpString({})
    }).toThrow(/string is expected/)

    expect(() => {
      cleanUpString()
    }).toThrow(/1st/)
    expect(() => {
      cleanUpString()
    }).toThrow(/`cleanUpString`/)
    expect(() => {
      cleanUpString()
    }).toThrow(/is not defined/)
    expect(() => {
      cleanUpString()
    }).toThrow(/string is expected/)
  })
})
