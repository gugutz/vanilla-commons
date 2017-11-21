import curry from '../function/curry'
import typeOf from '../utils/type-of'
import {validateClassManipulationArguments} from './helpers'
import hasClass from './has-class'

export default curry((newClass, element) => {
  validateClassManipulationArguments({
    functionName: 'addClass',
    args: [newClass, element]
  })

  const classesToAdd = typeOf(newClass) === 'string' ? [newClass] : newClass

  element.className = element.className
    .split(' ')
    .filter(str => str.trim() !== '')
    .concat(classesToAdd.filter(classToAdd => !hasClass(classToAdd, element)))
    .join(' ')

  return element
})
