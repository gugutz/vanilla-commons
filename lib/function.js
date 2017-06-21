import kindOf from 'kind-of'

export const curry = (fn, ...args) => {
  if (kindOf(fn) === 'undefined') {
    throw new TypeError(
      'The 1st argument to function `curry` is not defined, a function is expected.'
    )
  }

  if (kindOf(fn) !== 'function') {
    throw new TypeError(
      'The 1st argument to function `curry` has an unexpected type, a function is expected.'
    )
  }

  if (args.length === fn.length) {
    return fn(...args)
  }
  return curry.bind(this, fn, ...args)
}
