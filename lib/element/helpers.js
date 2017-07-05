import validateArguments from '../utils/validate-arguments'

export const validateClassManipulationArguments = ({functionName, args}) => {
  validateArguments({
    args,
    functionName,
    expectedTypes: [['string', 'array'], 'element']
  })
}
