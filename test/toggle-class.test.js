import {toggleClass} from '../lib/element'

describe('toggleClass main functionality', () => {
  it('should toogle a class from a DOM element', () => {
    const element = document.createElement('div')
    element.className = 'hey'
    toggleClass('hey', element)
    expect(element.className).toBe('')
    toggleClass('hey', element)
    expect(element.className).toBe('hey')
  })

  it('should return the element', () => {
    const actual = document.createElement('div')
    const expected = toggleClass('hey', actual)
    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const element = document.createElement('div')
    element.className = 'hey'
    toggleClass('hey')(element)
    expect(element.className).toBe('')
  })

  it('should accept an array of classes', () => {
    const element = document.createElement('div')
    element.className = 'hey'
    toggleClass(['hey', 'there'], element)
    expect(element.className).toBe('there')
    toggleClass(['hey', 'there'], element)
    expect(element.className).toBe('hey')
  })

  it('should work with prefix classes', () => {
    const element = document.createElement('div')
    element.className = 'table table-hover table-inverse'
    toggleClass('table')(element)
    expect(element.className).toBe('table-hover table-inverse')
  })
})

describe('toggleClass arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      toggleClass({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      toggleClass(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      toggleClass('hey', 42)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      toggleClass('hey', undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
