export const addLeadingZero = (num, length) => {
  let str = String(num)
  while (str.length < length) {
    str = '0' + str
  }

  return str
}

export const monthDays = (month, year) =>
  new Date(Date.UTC(year, month + 1, 0)).getUTCDate()

export const getOrdinalLetters = num => {
  const cent = num % 100
  if (cent >= 10 && cent <= 20) {
    return 'th'
  }

  const dec = num % 10
  if (dec === 1) {
    return 'st'
  }
  if (dec === 2) {
    return 'nd'
  }
  if (dec === 3) {
    return 'rd'
  }
  return 'th'
}
