'use strict'
/*
  metadater === 'better' data data for metadata
  This module:
    - takes the date from the file name and turns it into a date object
    - take the date from the frontmatter and turns it into a date object
  This module has a bonus:
    - vcstime
      - it should take a file and find the lastmod soley based off of the last time the file was commited to VC
*/
import { exec } from 'child_process'

function vcstime (filepath, fileobject) {
  try {
    exec('git log -1  --format=%ai -- ' + filepath, function (err, stdout, stderr) {
      if (stdout) {
        let lastmod = new Date(stdout)
        // console.log(filepath + ': ' + lastmod.toISOString())
        fileobject.lastmod = lastmod
        fileobject.meta.lastmod = lastmod
      }
      if (stderr) {
        console.log(filepath + ': ' + stderr)
        fileobject.lastmod = fileobject.stats.mtime
        fileobject.meta.lastmod = fileobject.stats.mtime
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

function metadater () {
  return function (files, metalsmith, done) {
    const basename = require('path').basename
    const slug = require('slug')
    const pattern = /^((\d+)-(\d+)-(\d+))-(.+)\.md$/

    for (let file in files) {
      const path = metalsmith._source + '/' + file
      // console.log(path)
      vcstime(path, files[file])
      try {
        const baseName = pattern.exec(basename(path))
        // I am positive calling the slug() isn't needed but better safe than sorry
        files[file].slug = slug(baseName[5])

        let date = new Date(baseName[2], baseName[3], baseName[4])
        files[file].date = date // .toISOString()
        files[file].year = baseName[2]
        files[file].month = baseName[3]
        files[file].day = baseName[4]

        // using the date encoded in the file
        if (files[file].date) {
          let date = new Date(files[file].date)
          files[file].date = date.toISOString()
        }
        else {  // take from filename
          files[file].date = date.toISOString()
        } }
      catch (e) {
        // console.log(baseName)
        console.log(e)
      }
    }
    done()
  }
}
export { metadater as default }
