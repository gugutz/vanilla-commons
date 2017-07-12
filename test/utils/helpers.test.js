import {getOrdinalLetters} from '../../lib/utils/helpers'

describe('getOrdinalLetters main functionality', () => {
  it('should return a number followed by the properly ordinal letters', () => {
    expect(getOrdinalLetters(1)).toBe('st')
    expect(getOrdinalLetters(2)).toBe('nd')
    expect(getOrdinalLetters(3)).toBe('rd')
    expect(getOrdinalLetters(4)).toBe('th')
  })

  it('should handle the numbers between 10 and 20', () => {
    expect(getOrdinalLetters(10)).toBe('th')
    expect(getOrdinalLetters(11)).toBe('th')
    expect(getOrdinalLetters(12)).toBe('th')
    expect(getOrdinalLetters(13)).toBe('th')
  })

  it('should handle the number zero', () => {
    expect(getOrdinalLetters(0)).toBe('th')
  })

  it('should handle the numbers between 20 and 100', () => {
    expect(getOrdinalLetters(20)).toBe('th')
    expect(getOrdinalLetters(21)).toBe('st')
    expect(getOrdinalLetters(22)).toBe('nd')
    expect(getOrdinalLetters(23)).toBe('rd')
    expect(getOrdinalLetters(24)).toBe('th')
  })

  it('should handle big numbers', () => {
    expect(getOrdinalLetters(100)).toBe('th')
    expect(getOrdinalLetters(1928)).toBe('th')
    expect(getOrdinalLetters(87121)).toBe('st')
  })
})
