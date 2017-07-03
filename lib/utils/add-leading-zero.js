export default (num, length) => {
  let str = String(num)
  while (str.length < length) {
    str = '0' + str
  }

  return str
}
