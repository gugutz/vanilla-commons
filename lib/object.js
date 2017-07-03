import {curry} from './function'
import {capitalize} from './string'
import validateArguments from './utils/validate-arguments'

const mapObject = mode =>
  curry((fn, object) => {
    const functionName = 'map' + capitalize(mode)
    validateArguments({
      args: [fn, object],
      functionName,
      expectedTypes: ['function', 'object']
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
