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

export const pipe = (...fns) => value =>
  fns.reduce((accumulator, current, index) => {
    validateArgument({
      arg: current,
      functionName: 'pipe',
      position: index + 1,
      expectedType: 'function'
    })

    return current(accumulator)
  }, value)

export const compose = (...fns) => value =>
  fns.reduceRight((accumulator, current, index) => {
    validateArgument({
      arg: current,
      functionName: 'compose',
      position: index + 1,
      expectedType: 'function'
    })
    return current(accumulator)
  }, value)

export const throttle = curry((limit, fn) => {
  validateArgument({
    arg: limit,
    functionName: 'throttle',
    position: 1,
    expectedType: 'number'
  })

  validateArgument({
    arg: fn,
    functionName: 'throttle',
    position: 2,
    expectedType: 'function'
  })

  let wait = false

  return () => {
    if (!wait) {
      fn()
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
    }
  }
})
