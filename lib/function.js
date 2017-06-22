import validateArgument from './utils/validate-argument'

export function curry(fn, ...args) {
  validateArgument({
    arg: fn,
    functionName: 'curry',
    position: 1,
    expectedType: 'function'
  })

  if (args.length === fn.length) {
    return fn(...args)
  }
  return curry.bind(this, fn, ...args)
}
