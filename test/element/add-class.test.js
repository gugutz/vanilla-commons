import addClass from '../../lib/element/add-class'

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

  it('should not add a class multiple time', () => {
    const element = document.createElement('div')
    element.className = 'hey'
    addClass('there', element)
    addClass('there', element)
    expect(element.className).toBe('hey there')
  })
})

describe('addClass arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      addClass({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      addClass(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/string or array is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      addClass('hey', 42)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      addClass('hey', undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`addClass`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
