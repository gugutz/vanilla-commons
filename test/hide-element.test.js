import {hideElement} from '../lib/element'

describe('hideElement main functionality', () => {
  it('should hide a element', () => {
    const child = document.createElement('div')
    child.id = 'child1'
    expect(hideElement(child)).toEqual(child)
    expect(child.style.display).toBe('none')
  })

  it('should accept an array of elements', () => {
    const child1 = document.createElement('div')
    child1.id = 'child1'
    const child2 = document.createElement('div')
    child2.id = 'child2'
    const child3 = document.createElement('div')
    child3.id = 'child3'

    expect(hideElement([child1, child3])).toEqual([child1, child3])
    expect(child1.style.display).toBe('none')
    expect(child2.style.display).not.toBe('none')
    expect(child3.style.display).toBe('none')
  })
})

describe('hideElement arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      hideElement({})
    }).toThrow(TypeError)
    expect(() => {
      hideElement(null)
    }).toThrow(TypeError)
    expect(() => {
      hideElement(42)
    }).toThrow(TypeError)
    expect(() => {
      hideElement(() => {})
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when the first argument is not defined', () => {
    expect(() => {
      hideElement()
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      hideElement({})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`hideElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element or array is expected/)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      hideElement()
    })
    expected.toThrow(/1st/)
    expected.toThrow(/`hideElement`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element or array is expected/)
  })
})
