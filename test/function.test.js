import {curry} from '../lib/function'

describe('curry function', () => {
  it('should return an object', () => {
    expect(curry()).toEqual({})
  })
})
