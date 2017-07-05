import validateArguments from '../utils/validate-arguments'

export default (...fns) => {
  validateArguments({
    args: fns,
    functionName: 'compose',
    expectedTypes: Array(fns.length).fill('function')
  })

  return value =>
    fns.reduceRight((accumulator, current) => current(accumulator), value)
}
