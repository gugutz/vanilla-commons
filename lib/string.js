import validateArgument from './utils/validate-argument'

export const cleanUpString = str => {
  validateArgument({
    arg: str,
    functionName: 'cleanUpString',
    position: 1,
    expectedType: 'string'
  })

  return str.replace(/(\r\n|\n|\r)/gm, '').trim()
}

export const capitalize = str => {
  validateArgument({
    arg: str,
    functionName: 'capitalize',
    position: 1,
    expectedType: 'string'
  })

  if (cleanUpString(str) === '') {
    return str
  }

  return str[0].toUpperCase() + str.slice(1)
}
