import {killElement} from '../lib/element'

describe('killElement main functionality', () => {
  it('should kill a element', () => {
    const parent = document.createElement('div')
    const child = document.createElement('div')
    parent.appendChild(child)
    killElement(child)
    expect(parent.children.length).toBe(0)
  })

  it('should accept an array of elements', () => {
    const parent = document.createElement('div')
    const child1 = document.createElement('div')
    child1.id = 'child1'
    const child2 = document.createElement('div')
    child2.id = 'child2'
    const child3 = document.createElement('div')
    child3.id = 'child3'

    parent.appendChild(child1)
    parent.appendChild(child2)
    parent.appendChild(child3)
    killElement([child1, child3])
    expect(parent.children.length).toBe(1)
    expect(parent.children[0]).toEqual(child2)
  })
})

describe('killElement arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      killElement({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`killElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element or array is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      killElement()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`killElement`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element or array is expected/)
  })
})
