import {removeClass} from '../lib/element'

describe('removeClass main functionality', () => {
  it('should remove a class from a DOM element', () => {
    const element = document.createElement('div')
    element.className = 'hey there'
    removeClass('hey', element)
    expect(element.className).toBe('there')
    removeClass('there', element)
    expect(element.className).toBe('')
  })

  it('should return the element', () => {
    const actual = document.createElement('div')
    const expected = removeClass('hey', actual)
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const element = document.createElement('div')
    element.className = 'hey there'
    removeClass('hey')(element)
    expect(element.className).toBe('there')
  })

  it('should accept an array of classes', () => {
    const element = document.createElement('div')
    element.className = 'hey there'
    removeClass(['hey', 'there'])(element)
    expect(element.className).toBe('')
  })

  it('should work with prefix classes', () => {
    const element = document.createElement('div')
    element.className = 'table table-hover table-inverse'
    removeClass(['table-hover', 'table-inverse'])(element)
    expect(element.className).toBe('table')
  })
})

describe('removeClass arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      removeClass({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      removeClass(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      removeClass('hey', 42)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      removeClass('hey', undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
