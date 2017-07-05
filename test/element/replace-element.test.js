import replaceElement from '../../lib/element/replace-element'

describe('replaceElement main functionality', () => {
  it('should replace a element', () => {
    const parent = document.createElement('div')
    const oldNode = document.createElement('div')
    oldNode.id = 'oldNode'
    const newNode = document.createElement('div')
    newNode.id = 'newNode'

    parent.appendChild(oldNode)
    expect(replaceElement(oldNode, newNode)).toEqual(newNode)
    expect(parent.children.length).toBe(1)
    expect(parent.children[0]).toEqual(newNode)
  })
})

describe('replaceElement arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      replaceElement(undefined, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`replaceElement`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      replaceElement({}, document.createElement('div'))
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`replaceElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      replaceElement(document.createElement('div'), {})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`replaceElement`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      replaceElement(document.createElement('div'), undefined)
    })

    expected.toThrow(TypeError)
    expected.toThrow(/2nd/)
    expected.toThrow(/`replaceElement`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
