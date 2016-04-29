'use strict'

import {basename, dirname, extname} from 'path'
/*
  Just take one file from the files object
  see if a the file has `layout` metadata assigned to it
  if it does but the layout has no file extension we will append .hbs
*/
function forge() {
  return function(files, metalsmith, done) {
    for (let file in files) {
      if (files[file].layout && !extname(files[file].layout))
        files[file].layout = files[file].layout + '.hbs'
    }
      done()
    }}
export { forge as default }

const hammerOptions = function (userOptions) {
  let defaultOptions = { ignore: [], defaultCollection: null, defaultLayout: 'default.hbs' }

  for (var opt in userOptions) {
    defaultOptions[opt] = userOptions[opt] }
  return defaultOptions
}
