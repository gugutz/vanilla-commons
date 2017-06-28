import validateArgument from './utils/validate-argument'

export const round = num => {
  validateArgument({
    arg: num,
    functionName: 'round',
    position: 1,
    expectedType: 'number'
  })
  return Number(Math.sign(num) * (Math.round(Math.abs(num) + 'e2') + 'e-2'))
}
