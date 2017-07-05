import curry from '../function/curry'
import typeOf from '../utils/type-of'
import {validateClassManipulationArguments} from './helpers'

export default curry((classToCheck, element) => {
  validateClassManipulationArguments({
    functionName: 'hasClass',
    args: [classToCheck, element]
  })

  const classesToCheck =
    typeOf(classToCheck) === 'string' ? [classToCheck] : classToCheck

  const className = element.className
    .split(' ')
    .filter(str => str.trim() !== '')

  return classesToCheck.every(item => className.indexOf(item) !== -1)
})
