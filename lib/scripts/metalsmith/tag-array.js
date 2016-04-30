'use strict'
/*
  taggy === tag array
  This module turns the string of tags into an array
    'a, b c, d' turns into ['a', 'b c', d]
*/
function taggy () {
  return function (files, metalsmith, done) {
    for (let file in files) {
      if (files[file].tags) {
        files[file].tags = files[file].tags.split(', ')
      }
    }
    done()
  }
}
export { taggy as default }
