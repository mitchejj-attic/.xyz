'use strict'
function taggy() {

  return function(files, metalsmith, done) {


    for (let file in files) {
      if (files[file].tags)
      {
        files[file].tags = files[file].tags.split(", ")
      }

    }
      done()
    }
}
export { taggy as default }
