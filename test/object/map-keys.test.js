import mapKeys from '../../lib/object/map-keys'
import capitalize from '../../lib/string/capitalize'

describe('mapKeys main functionality', () => {
  it('should map over the keys of a object', () => {
    const actual = mapKeys(capitalize, {
      captain: 'picard',
      firstOfficer: 'riker'
    })

    const expected = {
      Captain: 'picard',
      FirstOfficer: 'riker'
    }

    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const actual = mapKeys(capitalize)({
      captain: 'picard',
      firstOfficer: 'riker'
    })

    const expected = {
      Captain: 'picard',
      FirstOfficer: 'riker'
    }

    expect(actual).toEqual(expected)
  })
})

describe('mapKeys arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      mapKeys({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      mapKeys(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      mapKeys(42, {})
    }).toThrow(TypeError)
    expect(() => {
      mapKeys(42, null)
    }).toThrow(TypeError)
    expect(() => {
      mapKeys(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      mapKeys(undefined, {})
    }).toThrow(TypeError)
    expect(() => {
      mapKeys(() => {}, undefined)
    }).toThrow(TypeError)
  })

  it('should throw an error with a friendly message when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      mapKeys({}, {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`mapKeys`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the first argument is not defined', () => {
    const expected = expect(() => {
      mapKeys(undefined, {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`mapKeys`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw an error with a friendly message when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      mapKeys(() => {}, 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`mapKeys`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/object is expected/)
  })

  it('should throw an error with a friendly message when the second argument is not defined', () => {
    const expected = expect(() => {
      mapKeys(() => {}, undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`mapKeys`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/object is expected/)
  })
})
