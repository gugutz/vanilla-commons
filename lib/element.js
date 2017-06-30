import validateArgument from './utils/validate-argument'
import {curry} from './function'

const validateClassManipulationArguments = ({functionName, str, element}) => {
  validateArgument({
    arg: str,
    functionName,
    position: 1,
    expectedType: 'string'
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
    .concat([newClass])
    .join(' ')

  return element
})

export const removeClass = curry((newClass, element) => {
  validateClassManipulationArguments({
    functionName: 'removeClass',
    str: newClass,
    element
  })

  element.className = element.className
    .split(' ')
    .filter(str => str.trim() !== '' && str !== newClass)
    .join(' ')

  return element
})

export const hasClass = curry((classToCheck, element) => {
  validateClassManipulationArguments({
    functionName: 'hasClass',
    str: classToCheck,
    element
  })

  return element.className.indexOf(classToCheck) !== -1
})

export const toggleClass = curry((classToToogle, element) => {
  validateClassManipulationArguments({
    functionName: 'toggleClass',
    str: classToToogle,
    element
  })

  if (hasClass(classToToogle, element)) {
    removeClass(classToToogle, element)
  } else {
    addClass(classToToogle, element)
  }

  return element
})
