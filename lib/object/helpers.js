import curry from '../function/curry'
import capitalize from '../string/capitalize'
import validateArguments from '../utils/validate-arguments'

export const mapObject = mode =>
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
