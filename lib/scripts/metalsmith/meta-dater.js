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

function vcstime (filePath, fileObject) {
  try {
    exec('git log -1  --format=%ai -- ' + filePath, function (err, stdout, stderr) {
      if (stdout) {
        const lastmod = new Date(stdout)
        // console.log(filePath + ': ' + lastmod.toISOString())
        fileObject.lastmod = lastmod
      }
      if (stderr) {
        console.log(filePath + ': ' + stderr)
        fileObject.lastmod = fileObject.stats.mtime
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
        note for new Date: Jan = 0 while Dec = 11
      parsedFileName[4] == DD
    */
    return new Date(parsedFileName[2], parsedFileName[3] - 1, parsedFileName[4])
  } return null
}

function sluggy(file) {
  /*
  We need a parse the date into date bits... this is needed for the collections pluging
  the collections plug in also needs a slug
    [ !!! ] now just using the title bits for the slug as the slug
  */
  const slug = require('slug')
  slug.defaults.mode = 'rfc3986'
  
  file.slug = slug(file.title)
  file.year = file.date.getFullYear()
  file.month = file.date.getMonth()
  file.day = file.date.getDate()

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
      }
      else {
        files[file].date = new Date(files[file].date)
      }
      sluggy(files[file])
    }
    done()
  }
}
export { metadater as default }
