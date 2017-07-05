import hasClass from '../../lib/element/has-class'

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

  it('should accept an array of classes', () => {
    const element = document.createElement('div')
    element.className = 'hey there hello'

    expect(hasClass(['hey', 'there'], element)).toBe(true)
    expect(hasClass(['hey', 'hello'], element)).toBe(true)
    expect(hasClass(['hey', 'there', 'man'], element)).toBe(false)
  })

  it('should work with prefix classes', () => {
    const element = document.createElement('div')
    element.className = 'table-hover'
    expect(hasClass('table', element)).toBe(false)
  })
})

describe('hasClass arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      hasClass({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      hasClass(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      hasClass('hey', 42)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      hasClass('hey', undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`hasClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
