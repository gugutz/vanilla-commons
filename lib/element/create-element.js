import isBooleanAttribute from 'is-boolean-attribute'
import validateArguments from '../utils/validate-arguments'
import typeOf from '../utils/type-of'
import addClass from './add-class'

const appendChild = parent => child => {
  if (typeOf(child) === 'string') {
    const text = document.createTextNode(child)
    parent.appendChild(text)
  } else if (typeOf(child) === 'element') {
    parent.appendChild(child)
  }
}

export default (selector = 'div', props = {}, children = false) => {
  validateArguments({
    args: [selector, props, children],
    functionName: 'createElement',
    expectedTypes: [
      'string',
      'object',
      children === false ? 'optional' : ['string', 'element', 'array']
    ]
  })

  const nodeType = selector.match(/^[a-z0-9]+/i)
  const id = selector.match(/#([a-z]+[a-z0-9-]*)/gi)
  const classes = selector.match(/\.([a-z]+[a-z0-9-]*)/gi)
  const attributes = selector.match(
    /\[([a-z][a-z-]+)(=['|"]?([^\]]*)['|"]?)?\]/gi
  )

  const element = document.createElement(
    nodeType === null ? 'div' : nodeType[0]
  )

  if (id !== null) {
    element.id = id[0].replace('#', '')
  }

  if (classes !== null) {
    element.className = [].map
      .call(classes, item => item.replace('.', ''))
      .join(' ')
  }

  if (attributes !== null) {
    [].forEach.call(attributes, item => {
      const [key, value] = item.replace(/\[|\]|'|"|`/g, '').split('=')
      element.setAttribute(
        key,
        value === undefined || isBooleanAttribute(key) ? '' : value
      )
    })
  }

  Object.keys(props).forEach(prop => {
    if (prop === 'data') {
      Object.keys(props.data).forEach(key => {
        element.setAttribute('data-' + key, props.data[key])
      })
      return false
    }

    if (prop === 'className') {
      addClass(props.className.split(' '), element)
      return false
    }

    if (prop === 'inner') {
      element.innerHTML = props.inner
      return false
    }

    if (isBooleanAttribute(prop)) {
      if (props[prop]) {
        element.setAttribute(prop, '')
      }
      return false
    }

    if (prop.substring(0, 2) === 'on') {
      element[prop] = props[prop]
      return false
    }

    element.setAttribute(prop, props[prop])
  })

  const childrenType = typeOf(children)
  const appendElement = appendChild(element)

  if (childrenType === 'string' || childrenType === 'element') {
    appendElement(children)
  } else if (childrenType === 'array') {
    children.forEach(appendElement)
  }

  return element
}
