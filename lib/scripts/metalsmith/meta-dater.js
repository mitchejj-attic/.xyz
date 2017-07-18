'use strict'
/*
  metadater === 'better' data data for metadata
  This module:
    - takes the date from the file name and turns it into a date object
    - take the date from the frontmatter and turns it into parsed date bits 
  This module has a bonus:
    - vcstime
      - it should take a file and find the lastmod soley based off of the last time the file was commited to VC
*/
import { exec } from 'child_process'
import moment from 'moment'

function vcstime (filePath, fileObject) {
  try {
    exec('git log -1  --format=%aI -- ' + filePath, function (err, stdout, stderr) {
      if (stdout) {
        const lastMod = moment(stdout.trim()).toDate()
        fileObject.lastmod = lastMod
      }
      if (stderr) {
        console.log(filePath + ': ' + stderr)
        fileObject.lastmod = fileObject.stats.mtime
        // would this be better?
        // moment(fileObject.stats.mtime.trim()).toDate()
      }
      if (err) {
        console.log(err)
      }
    })
  }
  catch (err) {
    console.log(err)
  }
}

function parseFileName(file) {
  /*
    Takes a path [file] and extracts knowledge from the file name using the pattern
      The pattern assumes the file name is in the form of
        'YYYY-MM-DD-description'
      If pattern is not matched assume an the filename does not define a date
   */
  const path = require('path')
  const pattern = /^((\d+)-(\d+)-(\d+))-(.+)\.md$/
  return  pattern.exec(path.basename(file))
}

function timestampFromFileName(file) {
    /*
    Take a file we wish to extract a datestamp from the files name
      For now we assume if datestamp exist in date the date is valid
   */ 
  const parsedFileName = parseFileName(file)
  if (parsedFileName !== null) {
    /*
    We don't want to use `parsedFileName[1]` as date-only strings (e.g. "1970-01-01") are treated as UTC, not local.
      parsedFileName[2] == YYYY
      parsedFileName[3] == MM
      parsedFileName[4] == DD
    */
    return moment(parsedFileName[1]).format()
    // return new Date(parsedFileName[2], parsedFileName[3], parsedFileName[4])
  } return null
}

function zeroPad (number){
  return (number < 10 ? '0' : '') + number
}

function sluggy (file) {
  /*
  We need a parse the date into date bits... this is needed for the collections pluging
  the collections plug in also needs a slug
    [ !!! ] now just using the title bits for the slug as the slug
  */
  const slug = require('slug')
  slug.defaults.mode = 'rfc3986'
  
  file.slug = slug(file.title)
  //file.year = zeroPad(file.date.getFullYear())
  // Note: Jan = 0 while Dec = 11
  //file.month = zeroPad(file.date.getMonth() +1)
  //file.day = zeroPad(file.date.getDate())
  file.year = moment(file.date).format('YYYY')
  file.month = moment(file.date).format('MM')
  file.day = moment(file.date).format('DD')

}
function metadater () {
  return function (files, metalsmith, done) {
    for (let file in files) {
      const path = require('path')
      const relativePath = path.join(metalsmith._source, file)

      vcstime(relativePath, files[file])

      if (files[file].date == null) {
        const dateFromFile = timestampFromFileName(file)
        files[file].date = dateFromFile
        console.log(file + " : -> " + files[file].date)
      }
      else {
        files[file].date = moment(new Date(files[file].date)).format()
        console.log(file + " : -> " + files[file].date)
      }
      sluggy(files[file])
    }
    done()
  }
}
export { metadater as default }
