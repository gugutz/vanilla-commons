import {showElement} from '../lib/element'

describe('showElement main functionality', () => {
  it('should show a element', () => {
    const child = document.createElement('div')
    child.id = 'child1'
    expect(showElement(child)).toEqual(child)
    expect(child.style.display).toBe('block')
  })

  it('should accept an array of elements', () => {
    const child1 = document.createElement('div')
    child1.id = 'child1'
    const child2 = document.createElement('div')
    child2.id = 'child2'
    const child3 = document.createElement('div')
    child3.id = 'child3'

    expect(showElement([child1, child3])).toEqual([child1, child3])
    expect(child1.style.display).toBe('block')
    expect(child2.style.display).not.toBe('block')
    expect(child3.style.display).toBe('block')
  })
})

describe('showElement arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      showElement({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`showElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      showElement()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`showElement`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element or array is expected/)
  })
})
