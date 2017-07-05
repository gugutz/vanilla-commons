import typeOf from '../utils/type-of'
import curry from '../function/curry'
import {validateClassManipulationArguments} from './helpers'

export default curry((classToRemove, element) => {
  validateClassManipulationArguments({
    functionName: 'removeClass',
    args: [classToRemove, element]
  })

  element.className = element.className
    .split(' ')
    .filter(str => {
      if (str.trim() === '') {
        return false
      }

      if (typeOf(classToRemove) === 'string' && str === classToRemove) {
        return false
      }

      if (
        typeOf(classToRemove) === 'array' &&
        classToRemove.some(item => item === str)
      ) {
        return false
      }

      return true
    })
    .join(' ')

  return element
})
