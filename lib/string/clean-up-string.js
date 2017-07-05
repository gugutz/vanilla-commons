import validateArguments from '../utils/validate-arguments'

export default str => {
  validateArguments({
    args: [str],
    functionName: 'cleanUpString',
    expectedTypes: ['string']
  })

  return str.replace(/(\r\n|\n|\r)/gm, '').trim()
}
