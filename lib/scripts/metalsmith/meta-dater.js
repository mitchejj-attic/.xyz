'use strict'
    import { exec } from 'child_process'
    
function vcstime(filepath, fileobject) {
    
    try {
        exec('git log -1  --format=%ai -- ' + filepath, function (err, stdout, stderr) {
            if (stdout)
                fileobject.lastmod = Date(stdout)
            if (stderr) {
                fileobject.lastmod = fileobject.stats.mtime
            }
        })
        
    }
    catch (err) {
        console.log(err)
    }
}

function metadater() {
  return function(files, metalsmith, done) {
    const basename = require('path').basename
    const slug = require('slug')
    const pattern = /^((\d+)-(\d+)-(\d+))-(.+)\.md$/
    let date ='0000-00-00'

    for (let file in files) {
        const path = metalsmith._source + '/' + file
        //console.log(path)
       vcstime(path, files[file])
      try {
        const baseName = pattern.exec(basename(path))
        // I am positive calling the slug() isn't needed but better safe than sorry
  		files[file].slug = slug(baseName[5])
            
        let date = new Date(baseName[2], baseName[3], baseName[4])
        files[file].date = date //.toISOString()
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
        }}
      catch (e) {
        //console.log(baseName)
        console.log(e)
      }}

      done()
    }
}
export { metadater as default }
