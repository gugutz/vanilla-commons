import validateArgument from './utils/validate-argument'
import {curry} from './function'

const validateClassManipulationArguments = ({functionName, str, element}) => {
  validateArgument({
    arg: str,
    functionName,
    position: 1,
    expectedType: ['string', 'array']
  })

  validateArgument({
    arg: element,
    functionName,
    position: 2,
    expectedType: 'element'
  })
}

export const addClass = curry((newClass, element) => {
  validateClassManipulationArguments({
    functionName: 'addClass',
    str: newClass,
    element
  })

  element.className = element.className
    .split(' ')
    .filter(str => str.trim() !== '')
    .concat(typeof newClass === 'string' ? [newClass] : newClass)
    .join(' ')

  return element
})

export const removeClass = curry((classToRemove, element) => {
  validateClassManipulationArguments({
    functionName: 'removeClass',
    str: classToRemove,
    element
  })

  element.className = element.className
    .split(' ')
    .filter(str => {
      if (str.trim() === '') {
        return false
      }

      if (typeof classToRemove === 'string' && str === classToRemove) {
        return false
      }

      if (Object.prototype.toString.call(classToRemove) === '[object Array]' && classToRemove.some(item => item === str)) {
        return false
      }

      return true
    })
    .join(' ')

  return element
})

export const hasClass = curry((classToCheck, element) => {
  validateClassManipulationArguments({
    functionName: 'hasClass',
    str: classToCheck,
    element
  })


  const classesToCheck = typeof classToCheck === 'string' ? [classToCheck] : classToCheck

  const className = element.className
    .split(' ')
    .filter(str => str.trim() !== '')

  return classesToCheck.every(item => className.indexOf(item) !== -1)
})

export const toggleClass = curry((classToToggle, element) => {
  validateClassManipulationArguments({
    functionName: 'toggleClass',
    str: classToToggle,
    element
  })

  const classesToToggle = typeof classToToggle === 'string' ? [classToToggle] : classToToggle

  for (classToToggle of classesToToggle) {
    if (hasClass(classToToggle, element)) {
      removeClass(classToToggle, element)
    } else {
      addClass(classToToggle, element)
    }
  }

  return element
})
