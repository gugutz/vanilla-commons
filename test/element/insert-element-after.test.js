import insertElementAfter from '../../lib/element/insert-element-after'

describe('insertElementAfter main functionality', () => {
  it('should insert a element before a reference node', () => {
    const parent = document.createElement('div')
    parent.id = 'parent'

    const referenceNode = document.createElement('div')
    referenceNode.id = 'referenceNode'

    const newNode = document.createElement('div')
    newNode.id = 'newNode'

    parent.appendChild(referenceNode)

    expect(parent.children.length).toBe(1)
    expect(parent.children[0]).toEqual(referenceNode)
    expect(insertElementAfter(referenceNode, newNode)).toEqual(newNode)
    expect(parent.children.length).toBe(2)
    expect(parent.children[0]).toEqual(referenceNode)
    expect(parent.children[1]).toEqual(newNode)
  })

  it('should be curried', () => {
    const parent = document.createElement('div')
    parent.id = 'parent'

    const referenceNode = document.createElement('div')
    referenceNode.id = 'referenceNode'

    const newNode = document.createElement('div')
    newNode.id = 'newNode'

    parent.appendChild(referenceNode)

    expect(parent.children.length).toBe(1)
    expect(parent.children[0]).toEqual(referenceNode)
    expect(insertElementAfter(referenceNode)(newNode)).toEqual(newNode)
    expect(parent.children.length).toBe(2)
    expect(parent.children[0]).toEqual(referenceNode)
    expect(parent.children[1]).toEqual(newNode)
  })
})

describe('insertElementAfter arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      insertElementAfter({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`insertElementAfter`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      insertElementAfter(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`insertElementAfter`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      insertElementAfter(document.createElement('div'), {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`insertElementAfter`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      insertElementAfter(document.createElement('div'), undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`insertElementAfter`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
