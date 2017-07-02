import {insertElementBefore} from '../lib/element'

describe('insertElementBefore main functionality', () => {
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
    expect(insertElementBefore(referenceNode, newNode)).toEqual(newNode)
    expect(parent.children.length).toBe(2)
    expect(parent.children[0]).toEqual(newNode)
    expect(parent.children[1]).toEqual(referenceNode)
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
    expect(insertElementBefore(referenceNode)(newNode)).toEqual(newNode)
    expect(parent.children.length).toBe(2)
    expect(parent.children[0]).toEqual(newNode)
    expect(parent.children[1]).toEqual(referenceNode)
  })
})

describe('insertElementBefore arguments validation errors', () => {
  it('should throw a TypeError when receive unexpected argument types', () => {
    expect(() => {
      insertElementBefore({}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(null, new Date())
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(() => {}, new Date())
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(42, {})
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(42, null)
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(42, 42)
    }).toThrow(TypeError)
    expect(() => {
      insertElementBefore(42, () => {})
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      insertElementBefore({}, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`insertElementBefore`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      insertElementBefore(undefined, document.createElement('div'))
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`insertElementBefore`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      insertElementBefore(document.createElement('div'), {})
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`insertElementBefore`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      insertElementBefore(document.createElement('div'), undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`insertElementBefore`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
