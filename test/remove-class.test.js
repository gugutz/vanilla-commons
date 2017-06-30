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
})

describe('removeClass arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      removeClass({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      removeClass(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      removeClass(42, {})
    }).toThrow(TypeError)
    expect(() => {
      removeClass(42, null)
    }).toThrow(TypeError)
    expect(() => {
      removeClass(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      removeClass(undefined, document.createElement('div'))
    }).toThrow(TypeError)
    expect(() => {
      removeClass('hey', undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      removeClass({}, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      removeClass(undefined, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      removeClass('hey', 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      removeClass('hey', undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`removeClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
