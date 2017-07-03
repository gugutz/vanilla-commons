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

      if (
        Object.prototype.toString.call(classToRemove) === '[object Array]' &&
        classToRemove.some(item => item === str)
      ) {
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

  const classesToCheck =
    typeof classToCheck === 'string' ? [classToCheck] : classToCheck

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

  const classesToToggle =
    typeof classToToggle === 'string' ? [classToToggle] : classToToggle

  classesToToggle.forEach(item => {
    if (hasClass(item, element)) {
      removeClass(item, element)
    } else {
      addClass(item, element)
    }
  })

  return element
})

export const killElement = elementsToKill => {
  validateArgument({
    arg: elementsToKill,
    functionName: 'killElement',
    position: 1,
    expectedType: ['element', 'array']
  })

  const elements =
    Object.prototype.toString.call(elementsToKill) === '[object Array]' ?
      elementsToKill :
      [elementsToKill]

  elements.forEach(element => {
    element.parentNode.removeChild(element)
  })
}

export const hideElement = elementsToHide => {
  validateArgument({
    arg: elementsToHide,
    functionName: 'hideElement',
    position: 1,
    expectedType: ['element', 'array']
  })

  const elements =
    Object.prototype.toString.call(elementsToHide) === '[object Array]' ?
      elementsToHide :
      [elementsToHide]

  elements.forEach(element => {
    element.style.display = 'none'
  })

  return elementsToHide
}

export const showElement = elementsToShow => {
  validateArgument({
    arg: elementsToShow,
    functionName: 'showElement',
    position: 1,
    expectedType: ['element', 'array']
  })

  const elements =
    Object.prototype.toString.call(elementsToShow) === '[object Array]' ?
      elementsToShow :
      [elementsToShow]

  elements.forEach(element => {
    element.style.display = 'block'
  })

  return elementsToShow
}

export const replaceElement = curry((originalElement, newElement) => {
  validateArgument({
    arg: originalElement,
    functionName: 'replaceElement',
    position: 1,
    expectedType: 'element'
  })

  validateArgument({
    arg: newElement,
    functionName: 'replaceElement',
    position: 2,
    expectedType: 'element'
  })

  originalElement.parentNode.replaceChild(newElement, originalElement)

  return newElement
})

export const insertElementBefore = curry((referenceNode, newElement) => {
  validateArgument({
    arg: referenceNode,
    functionName: 'insertElementBefore',
    position: 1,
    expectedType: 'element'
  })

  validateArgument({
    arg: newElement,
    functionName: 'insertElementBefore',
    position: 2,
    expectedType: 'element'
  })

  referenceNode.parentNode.insertBefore(newElement, referenceNode)

  return newElement
})

export const insertElementAfter = curry((referenceNode, newElement) => {
  validateArgument({
    arg: referenceNode,
    functionName: 'insertElementAfter',
    position: 1,
    expectedType: 'element'
  })

  validateArgument({
    arg: newElement,
    functionName: 'insertElementAfter',
    position: 2,
    expectedType: 'element'
  })

  referenceNode.parentNode.insertBefore(newElement, referenceNode.nextSibling)

  return newElement
})

export const clearEvents = element => {
  validateArgument({
    arg: element,
    functionName: 'clearEvents',
    position: 1,
    expectedType: 'element'
  })

  const clonedElement = element.cloneNode(true)

  if (element.parentNode) {
    replaceElement(element, clonedElement)
  }

  return clonedElement
}

export const getParents = element => {
  validateArgument({
    arg: element,
    functionName: 'getParents',
    position: 1,
    expectedType: 'element'
  })

  let parent = element
  const parents = []

  while (parent !== document.body) {
    parent = parent.parentNode

    if (!parent) {
      break
    }
    parents.push(parent)
  }

  return parents
}
