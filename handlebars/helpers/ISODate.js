'use strict'

module.exports = function (date, options) {
  const newDate = new Date(date)
  if ((newDate instanceof Date)) {
    return newDate.toISOString()
  }
  else {
    return '9999-99-99'
  }
}
