import validateArguments from '../utils/validate-arguments'

export default element => {
  validateArguments({
    args: [element],
    functionName: 'getParents',
    expectedTypes: ['element']
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
