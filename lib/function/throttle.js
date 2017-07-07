import validateArguments from '../utils/validate-arguments'
import curry from './curry'

export default curry((limit, fn) => {
  validateArguments({
    args: [limit, fn],
    functionName: 'throttle',
    expectedTypes: ['number', 'function']
  })

  let wait = false

  return (...args) => {
    if (!wait) {
      fn(...args)
      wait = true
      setTimeout(() => {
        wait = false
      }, limit)
    }
  }
})
