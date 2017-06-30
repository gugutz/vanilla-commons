import {curry} from './function'
import {capitalize} from './string'
import validateArgument from './utils/validate-argument'

const mapObject = mode =>
  curry((fn, object) => {
    const functionName = 'map' + capitalize(mode)
    validateArgument({
      arg: fn,
      functionName,
      position: 1,
      expectedType: 'function'
    })

    validateArgument({
      arg: object,
      functionName,
      position: 2,
      expectedType: 'object'
    })

    const transformation = {
      values: key => ({[key]: fn(object[key])}),
      keys: key => ({[fn(key)]: object[key]})
    }

    return Object.keys(object)
      .map(transformation[mode])
      .reduce((previous, current) => ({...previous, ...current}), {})
  })

export const mapValues = mapObject('values')

export const mapKeys = mapObject('keys')
