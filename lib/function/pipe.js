import validateArguments from '../utils/validate-arguments'

export default (...fns) => {
  validateArguments({
    args: fns,
    functionName: 'pipe',
    expectedTypes: Array(fns.length).fill('function')
  })

  return value =>
    fns.reduce((accumulator, current) => current(accumulator), value)
}
