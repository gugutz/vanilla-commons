import {getParents} from '../lib/element'

describe('getParents main functionality', () => {
  it('should return the parents of a element, including the body', () => {
    const parent1 = document.createElement('div')
    parent1.id = 'parent1'

    const parent2 = document.createElement('div')
    parent2.id = 'parent2'

    const parent3 = document.createElement('div')
    parent3.id = 'parent3'

    const parent4 = document.createElement('div')
    parent4.id = 'parent4'

    const child = document.createElement('div')
    child.id = 'child'

    document.body.appendChild(parent1)
    parent1.appendChild(parent2)
    parent2.appendChild(parent3)
    parent3.appendChild(parent4)
    parent4.appendChild(child)

    const actual = getParents(child)
    const expected = [parent4, parent3, parent2, parent1, document.body]

    expect(actual).toEqual(expected)
  })

  it('should return the parents of a element not in the dom', () => {
    const parent1 = document.createElement('div')
    parent1.id = 'parent1'

    const parent2 = document.createElement('div')
    parent2.id = 'parent2'

    const parent3 = document.createElement('div')
    parent3.id = 'parent3'

    const parent4 = document.createElement('div')
    parent4.id = 'parent4'

    const child = document.createElement('div')
    child.id = 'child'

    parent1.appendChild(parent2)
    parent2.appendChild(parent3)
    parent3.appendChild(parent4)
    parent4.appendChild(child)

    const actual = getParents(child)
    const expected = [parent4, parent3, parent2, parent1]

    expect(actual).toEqual(expected)
  })
})

describe('getParents arguments validation errors', () => {
  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      getParents({})
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`getParents`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/element is expected/)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      getParents()
    })

    expected.toThrow(TypeError)
    expected.toThrow(/1st/)
    expected.toThrow(/`getParents`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/element is expected/)
  })
})
