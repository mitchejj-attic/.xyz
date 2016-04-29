const defaultLayout = 'default.hbs'

module.exports = function interject() {
  'use strict'
  return function(files, metalsmith, done) {


    for (let file in files) {
      if (!files[file].layout)
      {
        files[file].layout = defaultLayout
      }

    }
      done()
    }
}
