const toString = Object.prototype.toString

export default val => {
  const type = typeof val

  if (type === 'undefined') {
    return 'undefined'
  }

  if (type === 'string' || val instanceof String) {
    return 'string'
  }
  if (type === 'number' || val instanceof Number) {
    return 'number'
  }

  if (type === 'function' || val instanceof Function) {
    return 'function'
  }

  if (typeof Array.isArray !== 'undefined' && Array.isArray(val)) {
    return 'array'
  }

  if (val instanceof Date || toString.call(val) === '[object Date]') {
    return 'date'
  }

  if (
    typeof window === 'object' &&
    typeof val.nodeType === 'number' &&
    typeof val.nodeName === 'string'
  ) {
    return 'element'
  }

  return 'object'
}
