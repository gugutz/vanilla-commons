import {addClass} from '../lib/element'

describe('addClass main functionality', () => {
  it('should add a class to a DOM element', () => {
    const element = document.createElement('div')
    addClass('hey', element)
    expect(element.className).toBe('hey')
    addClass('there', element)
    expect(element.className).toBe('hey there')
  })

  it('should return the element', () => {
    const actual = document.createElement('div')
    const expected = addClass('hey', actual)
    expect(expected).toEqual(expected)
  })

  it('should be curried', () => {
    const element = document.createElement('div')
    addClass('hey')(element)
    expect(element.className).toBe('hey')
  })

  it('should accept an array of classes', () => {
    const element = document.createElement('div')
    addClass(['hey', 'there'])(element)
    expect(element.className).toBe('hey there')
  })

  it('should work with prefix classes', () => {
    const element = document.createElement('div')
    element.className = 'table'
    addClass(['table-hover', 'table-inverse'])(element)
    expect(element.className).toBe('table table-hover table-inverse')
  })
})

describe('addClass arguments validation errors', () => {
  it('should throw a TypeError when receive unexpected argument types', () => {
    expect(() => {
      addClass({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      addClass(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      addClass(42, {})
    }).toThrow(TypeError)
    expect(() => {
      addClass(42, null)
    }).toThrow(TypeError)
    expect(() => {
      addClass(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addClass({}, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addClass(undefined, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addClass('hey', 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addClass('hey', undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
