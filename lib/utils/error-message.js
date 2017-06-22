export default ({functionName, expectedType, position, messageType}) => {
  return `The ${position}st argument to function \`${functionName}\` ${messageType ===
    'unexpected' ?
    'has an unexpected type' :
    'is not defined'}, a ${expectedType} is expected.`
}
