import createElement from '../../lib/element/create-element'

describe('createElement main functionality', () => {
  it('should create an element', () => {
    const actual = createElement()
    const expected = document.createElement('div')

    expect(actual).toEqual(expected)
  })

  it('should create an span element', () => {
    const actual = createElement('span')
    const expected = document.createElement('span')

    expect(actual).toEqual(expected)
  })

  it('should create an div with an id', () => {
    const actual = createElement('#id')
    const expected = document.createElement('div')
    expected.id = 'id'

    expect(actual).toEqual(expected)
  })

  it('should create an div with an class', () => {
    const actual = createElement('.class')
    const expected = document.createElement('div')
    expected.className = 'class'

    expect(actual).toEqual(expected)
  })

  it('should create an div with an attribute', () => {
    const actual = createElement('[data-custom=hey]')
    const expected = document.createElement('div')
    expected.setAttribute('data-custom', 'hey')

    expect(actual).toEqual(expected)
  })

  it('should create an div with an attribute with quotes', () => {
    const actual = createElement('[data-custom="hey"][data-change=\'there\']')
    const expected = document.createElement('div')
    expected.setAttribute('data-custom', 'hey')
    expected.setAttribute('data-change', 'there')

    expect(actual).toEqual(expected)
  })

  it('should create an input with boolean attributes', () => {
    const actual = createElement('input[disabled="hey"][required]')
    const expected = document.createElement('input')
    expected.setAttribute('disabled', '')
    expected.setAttribute('required', '')

    expect(actual).toEqual(expected)
  })

  it('should create an element using css selectors', () => {
    const actual = createElement(
      'input#id.class1.class2[type=text][placeholder=hey]'
    )
    const expected = document.createElement('input')
    expected.id = 'id'
    expected.className = 'class1 class2'
    expected.type = 'text'
    expected.placeholder = 'hey'

    expect(actual).toEqual(expected)
  })

  it('should work with data props', () => {
    const actual = createElement('div', {
      data: {
        ref: 'hey',
        error: 'bad'
      }
    })

    const expected = document.createElement('div')
    expected.setAttribute('data-ref', 'hey')
    expected.setAttribute('data-error', 'bad')

    expect(actual).toEqual(expected)
  })

  it('should work with class props', () => {
    const actual = createElement('.test', {
      className: 'hey there man'
    })

    const expected = document.createElement('div')
    expected.className = 'test hey there man'

    expect(actual).toEqual(expected)
  })

  it('should work with boolean attributes props', () => {
    const actual = createElement('div', {
      required: false,
      checked: null,
      readonly: 1
    })

    const expected = document.createElement('div')
    expected.setAttribute('readonly', '')

    expect(actual).toEqual(expected)
  })

  it('should work with events props', () => {
    const handleClick = jest.fn()

    const clickEvent = new Event('click')

    const actual = createElement('div', {
      onclick: handleClick
    })

    actual.dispatchEvent(clickEvent)

    expect(handleClick.mock.calls.length).toBe(1)
  })

  it('should work with attributes props', () => {
    const actual = createElement('input', {
      type: 'text'
    })

    const expected = document.createElement('input')
    expected.type = 'text'

    expect(actual).toEqual(expected)
  })

  it('should add text to a element', () => {
    const actual = createElement('p', {}, 'hey man')
    const expected = document.createElement('p')
    expected.textContent = 'hey man'

    expect(actual).toEqual(expected)
  })

  it('should add a child to a element', () => {
    const actual = createElement('div', {}, createElement())
    const expected = document.createElement('div')
    expected.appendChild(document.createElement('div'))

    expect(actual).toEqual(expected)
  })

  it('should add children to element', () => {
    const actual = createElement('div', {}, [
      createElement('input'),
      'hey',
      createElement('img')
    ])

    const expected = document.createElement('div')
    expected.appendChild(document.createElement('input'))
    expected.appendChild(document.createTextNode('hey'))
    expected.appendChild(document.createElement('img'))

    expect(actual).toEqual(expected)
  })

  it('should innerHTML the string passed', () => {
    const actual = createElement(
      'div',
      {
        inner: '<br/>'
      },
      [createElement('input'), 'hey', createElement('img')]
    )

    const expected = document.createElement('div')
    expected.appendChild(document.createElement('br'))
    expected.appendChild(document.createElement('input'))
    expected.appendChild(document.createTextNode('hey'))
    expected.appendChild(document.createElement('img'))

    expect(actual).toEqual(expected)
  })
})

describe('createElement method overloading', () => {
  it('should accept text as second argument', () => {
    const actual = createElement('div', 'hey')
    const expected = document.createElement('div')
    expected.textContent = 'hey'

    expect(actual).toEqual(expected)
  })

  it('should accept an element as second argument', () => {
    const actual = createElement('div', document.createElement('h1'))
    const expected = document.createElement('div')
    expected.appendChild(document.createElement('h1'))

    expect(actual).toEqual(expected)
  })

  it('should accept children as second argument', () => {
    const actual = createElement('div', [
      document.createElement('h1'),
      document.createElement('h2')
    ])
    const expected = document.createElement('div')
    expected.appendChild(document.createElement('h1'))
    expected.appendChild(document.createElement('h2'))

    expect(actual).toEqual(expected)
  })

  it('should accept props as second argument', () => {
    const actual = createElement('div', {})
    const expected = document.createElement('div')

    expect(actual).toEqual(expected)
  })
})

describe('createElement arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      createElement({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`createElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string is expected/)
  })

  it('should throw an error with a friendly message when the third argument has an unexpected type', () => {
    const expected = expect(() => {
      createElement('', {}, {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/3rd/)
    expected.toThrow(/`createElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/string or element or array is expected/)
  })
})
