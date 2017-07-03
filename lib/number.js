import validateArguments from './utils/validate-arguments'

export const round = num => {
  validateArguments({
    args: [num],
    functionName: 'round',
    expectedTypes: ['number']
  })
  return Number(Math.sign(num) * (Math.round(Math.abs(num) + 'e2') + 'e-2'))
}
