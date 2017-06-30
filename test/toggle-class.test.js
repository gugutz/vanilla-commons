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
})

describe('toggleClass arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      toggleClass({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      toggleClass(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      toggleClass(42, {})
    }).toThrow(TypeError)
    expect(() => {
      toggleClass(42, null)
    }).toThrow(TypeError)
    expect(() => {
      toggleClass(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      toggleClass(undefined, document.createElement('div'))
    }).toThrow(TypeError)
    expect(() => {
      toggleClass('hey', undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      toggleClass({}, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      toggleClass(undefined, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      toggleClass('hey', 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      toggleClass('hey', undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`toggleClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
