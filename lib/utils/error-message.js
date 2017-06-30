export default ({functionName, expectedType, position, messageType}) => {
  return `The ${position}${position === 1 ?
    'st' :
    position === 2 ?
      'nd' :
      'rd'} argument to function \`${functionName}\` ${messageType ===
  'unexpected' ?
    'has an unexpected type' :
    'is not defined'}, a ${expectedType} is expected.`
}
