'use strict'



function ider() {
  return function(files, metalsmith, done) {

    let yearCount = 1
    let trackYear = 1

    for (let file in files) {
      try {

        if (trackYear == files[file].year ) {
          yearCount++
        }
        else {
          yearCount = 1
          trackYear = files[file].year
        }
        const id = "tag:nullog.net;" + files[file].year + ":" + files[file].month + ":" + files[file].day + "," + yearCount
        files[file].id = id
    //    console.log(id)
        }
      catch (e) {
        //console.log(baseName)
        console.log(e)
        console.log('ider: no date')
      }}

      done()
    }
}
export { ider as default }
