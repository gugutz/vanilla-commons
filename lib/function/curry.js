import validateArguments from '../utils/validate-arguments'

export default function curry(fn, ...args) {
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
