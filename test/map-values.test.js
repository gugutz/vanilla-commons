import {mapValues} from '../lib/object'
import {capitalize} from '../lib/string'

describe('mapValues main functionality', () => {
  it('map over the values of a object', () => {
    const actual = mapValues(capitalize, {
      captain: 'picard',
      firstOfficer: 'riker'
    })

    const expected = {
      captain: 'Picard',
      firstOfficer: 'Riker'
    }

    expect(actual).toEqual(expected)
  })

  it('should be curried', () => {
    const actual = mapValues(capitalize)({
      captain: 'picard',
      firstOfficer: 'riker'
    })

    const expected = {
      captain: 'Picard',
      firstOfficer: 'Riker'
    }

    expect(actual).toEqual(expected)
  })
})

describe('mapValues arguments validation errors', () => {
  it('should throw a TypeError when unexpected argument types', () => {
    expect(() => {
      mapValues({}, () => {})
    }).toThrow(TypeError)
    expect(() => {
      mapValues(null, () => {})
    }).toThrow(TypeError)
    expect(() => {
      mapValues(42, {})
    }).toThrow(TypeError)
    expect(() => {
      mapValues(42, null)
    }).toThrow(TypeError)
    expect(() => {
      mapValues(42, 42)
    }).toThrow(TypeError)
  })

  it('should throw a TypeError when one of the arguments is not defined', () => {
    expect(() => {
      mapValues(undefined, {})
    }).toThrow(TypeError)
    expect(() => {
      mapValues(() => {}, undefined)
    }).toThrow(TypeError)
  })

  it('should throw errors with friendly messages when the first argument has an unexpected type', () => {
    const expected = expect(() => {
      mapValues({}, {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`mapValues`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the first argument is not defined', () => {
    const expected = expect(() => {
      mapValues(undefined, {})
    })

    expected.toThrow(/1st/)
    expected.toThrow(/`mapValues`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/function is expected/)
  })

  it('should throw errors with friendly messages when the second argument has an unexpected type', () => {
    const expected = expect(() => {
      mapValues(() => {}, 42)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`mapValues`/)
    expected.toThrow(/unexpected type/)
    expected.toThrow(/object is expected/)
  })

  it('should throw errors with friendly messages when the second argument is not defined', () => {
    const expected = expect(() => {
      mapValues(() => {}, undefined)
    })

    expected.toThrow(/2nd/)
    expected.toThrow(/`mapValues`/)
    expected.toThrow(/is not defined/)
    expected.toThrow(/object is expected/)
  })
})
