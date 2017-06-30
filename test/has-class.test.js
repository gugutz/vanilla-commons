import {hasClass} from '../lib/element'

describe('hasClass main functionality', () => {
  it('should check if a DOM element has the given class', () => {
    const element = document.createElement('div')
    element.className = 'hey'

    expect(hasClass('hey', element)).toBe(true)
    expect(hasClass('there', element)).toBe(false)
  })

  it('should be curried', () => {
    const element = document.createElement('div')
    element.className = 'hey'

    expect(hasClass('hey', element)).toBe(true)
  })
})

describe('hasClass arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      hasClass({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      hasClass(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      hasClass(42, {})
    }).toThrow(TypeError)
    expect(() => {
      hasClass(42, null)
    }).toThrow(TypeError)
    expect(() => {
      hasClass(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      hasClass(undefined, document.createElement('div'))
    }).toThrow(TypeError)
    expect(() => {
      hasClass('hey', undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      hasClass({}, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      hasClass(undefined, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      hasClass('hey', 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      hasClass('hey', undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
