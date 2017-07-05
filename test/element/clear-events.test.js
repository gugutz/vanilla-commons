import clearEvents from '../../lib/element/clear-events'

describe('clearEvents main functionality', () => {
  it('should clear the events of a element', () => {
    const handleClick = jest.fn()
    const handleFocus = jest.fn()

    const parent = document.createElement('div')

    const element = document.createElement('div')
    element.id = 'element'

    parent.appendChild(element)

    element.addEventListener('click', handleClick)
    element.addEventListener('focus', handleFocus)

    const clickEvent = new Event('click')
    const focusEvent = new Event('focus')

    parent.children[0].dispatchEvent(clickEvent)
    parent.children[0].dispatchEvent(focusEvent)

    expect(handleClick.mock.calls.length).toBe(1)
    expect(handleFocus.mock.calls.length).toBe(1)

    clearEvents(element)

    parent.children[0].dispatchEvent(clickEvent)
    parent.children[0].dispatchEvent(focusEvent)

    expect(handleClick.mock.calls.length).toBe(1)
    expect(handleFocus.mock.calls.length).toBe(1)
  })

  it('should return the element of which the events will be cleared', () => {
    const element = document.createElement('div')
    element.id = 'element'

    expect(clearEvents(element)).toEqual(element)
  })

  it('should clear the events of the children of the element', () => {
    const handleClick = jest.fn()
    const clickEvent = new Event('click')

    const parent = document.createElement('div')
    parent.id = 'parent'

    const child = document.createElement('div')
    child.id = 'child'
    child.addEventListener('click', handleClick)
    parent.appendChild(child)

    const elementCleared = clearEvents(parent)

    elementCleared.children[0].dispatchEvent(clickEvent)

    expect(handleClick.mock.calls.length).toBe(0)
  })
})

describe('clearEvents arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      clearEvents({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`clearEvents`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      clearEvents(undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`clearEvents`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
