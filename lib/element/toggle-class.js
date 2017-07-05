import curry from '../function/curry'
import typeOf from '../utils/type-of'
import addClass from './add-class'
import hasClass from './has-class'
import removeClass from './remove-class'
import {validateClassManipulationArguments} from './helpers'

export default curry((classToToggle, element) => {
  validateClassManipulationArguments({
    functionName: 'toggleClass',
    args: [classToToggle, element]
  })

  const classesToToggle =
    typeOf(classToToggle) === 'string' ? [classToToggle] : classToToggle

  classesToToggle.forEach(item => {
    if (hasClass(item, element)) {
      removeClass(item, element)
    } else {
      addClass(item, element)
    }
  })

  return element
})
