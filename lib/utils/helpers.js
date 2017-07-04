export const addLeadingZero = (num, length) => {
  let str = String(num)
  while (str.length < length) {
    str = '0' + str
  }

  return str
}

export const monthDays = (month, year) =>
  new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
