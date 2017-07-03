import validateArguments from './utils/validate-arguments'

export const cleanUpString = str => {
  validateArguments({
    args: [str],
    functionName: 'cleanUpString',
    expectedTypes: ['string']
  })

  return str.replace(/(\r\n|\n|\r)/gm, '').trim()
}

export const capitalize = str => {
  validateArguments({
    args: [str],
    functionName: 'capitalize',
    expectedTypes: ['string']
  })

  if (cleanUpString(str) === '') {
    return str
  }

  return str[0].toUpperCase() + str.slice(1)
}
