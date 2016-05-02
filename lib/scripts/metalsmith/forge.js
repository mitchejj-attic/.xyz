'use strict'
/*
  forge === forge a way quick and dirty way to forge ahead in moving to metalsmith
  This modules simply appends the '.hbs' an pages layout
    Just take one file from the files object
    see if a the file has `layout` metadata assigned to it
    if it does but the layout has no file extension we will append .hbs
*/
import {basename, dirname, extname} from 'path'

function forge () {
  return function (files, metalsmith, done) {
    for (let file in files) {
      if (files[file].layout && !extname(files[file].layout)) {
        files[file].layout = files[file].layout + '.hbs'
      }
    }
    done()
  }
}
export { forge as default }