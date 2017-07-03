import validateArguments from './utils/validate-arguments'

export function curry(fn, ...args) {
  validateArguments({
    args: [fn],
    functionName: 'curry',
    expectedTypes: ['function']
  })

  if (args.length === fn.length) {
    return fn(...args)
  }
  return curry.bind(this, fn, ...args)
}

export const pipe = (...fns) => {
  validateArguments({
    args: fns,
    functionName: 'pipe',
    expectedTypes: Array(fns.length).fill('function')
  })

  return value =>
    fns.reduce((accumulator, current) => current(accumulator), value)
}

export const compose = (...fns) => {
  validateArguments({
    args: fns,
    functionName: 'compose',
    expectedTypes: Array(fns.length).fill('function')
  })

  return value =>
    fns.reduceRight((accumulator, current) => current(accumulator), value)
}

export const throttle = curry((limit, fn) => {
  validateArguments({
    args: [limit, fn],
    functionName: 'throttle',
    expectedTypes: ['number', 'function']
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
