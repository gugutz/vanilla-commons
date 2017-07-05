import curry from '../function/curry'
import typeOf from '../utils/type-of'
import {validateClassManipulationArguments} from './helpers'

export default curry((newClass, element) => {
  validateClassManipulationArguments({
    functionName: 'addClass',
    args: [newClass, element]
  })

  element.className = element.className
    .split(' ')
    .filter(str => str.trim() !== '')
    .concat(typeOf(newClass) === 'string' ? [newClass] : newClass)
    .join(' ')

  return element
})
