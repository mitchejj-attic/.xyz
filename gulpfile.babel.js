import gulp from 'gulp'
import connect from 'gulp-connect'
import livereload from 'gulp-livereload'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import mqpacker from 'css-mqpacker'
import csswring from 'csswring'
import cssnext from 'postcss-cssnext'
import atImport from 'postcss-import'
import uncss from 'gulp-uncss'

//https://www.npmjs.com/package/run-sequence
//https://github.com/mariocasciaro/gulp-concat-css
//postcss-import
//https://github.com/CodeTheory/__gulp4-postcss-example/blob/master/gulpfile.babel.js
//https://github.com/pjeby/gulpsmith
//https://github.com/gchallen/code.metalsmith-formatcheck
//https://stackoverflow.com/questions/23227248/is-there-some-gulp-plugin-that-lets-it-perform-the-function-of-a-static-site-gen
//http://ilikekillnerds.com/2014/07/copying-files-from-one-folder-to-another-in-gulp-js/

import { exec } from 'child_process'
//var exec = require('child_process').exec;

const vars = {
  css: {
    sourceFiles: './css/**/*.css',
    source: './css/nullog.css',
    dest: './build/_css/',
    uncss: './build/css_dest/un.css'
  },
  metalsmith: {
      source: '',
      dest: 'build/_site/'
  },
  watch_mode: {
    interval: 1000,
    mode: 'auto'
  }
}

//https://hellojason.net/blog/remove-unused-css-from-middleman-before-deploying/
gulp.task('build-css', () => {
    const processors = [
        atImport,
        cssnext,
        autoprefixer({browsers: ['last 1 version']}),
        mqpacker,
    
//    csswring
  ]
  return gulp.src(vars.css.source)
    .pipe(postcss(processors))
//    .pipe(uncss({
//        html: ['./build/**/*.html']
//    }))
//gulp-cssnano
    //gulp-rename
    .pipe(gulp.dest(vars.css.dest));
})

gulp.task('clean-css', () => {
  return gulp.src(vars.css.dest)
        .pipe(uncss({
            html: ['build/_site/**/*.html']
        }))
        .pipe(gulp.dest(vars.css.uncss));
})

gulp.task('watch-css', () => {
  let watcher = gulp.watch([vars.css.sourceFiles], vars.watch_mode, ['build-css'])
  watcher.on('change', function (event) {
   console.log(event.type + ' at ' + event.path); // added, changed, or deleted The path of the modified file
 })
})


gulp.task('server', () => {
  connect.server({
    root: ['build/_site', vars.css.dest],
    port: 8888
  })
}
)

gulp.task('build-metalsmith', (cb) => {
  console.log('building')
  exec('babel-node index.js', function (err, stdout, stderr) {
    if (stdout)
      console.log(stdout)
    if (stderr)
      console.log(stderr)
    cb(err)
  })
})

//https://github.com/shama/gaze
gulp.task('watch-metalsmith', () => {
  let watcher = gulp.watch(['layouts/**/*.hbs', 'src/**/*.md', 'src/**/*.markdown', 'src/**/*.html', '**/*.js'], {interval: 1000, mode: 'auto'}, ['build-metalsmith'])
  watcher.on('change', function (event) {
   console.log(event.type + ' at ' + event.path); // added, changed, or deleted The path of the modified file
 })
})

gulp.task('dist', () => {
    gulp.src(vars.css.dest + '*.css')
    .pipe(uncss({
        html: [vars.metalsmith.dest + '/**/*.html']
    }))
//    .pipe(uncss({[
//        html: [vars.metalsmith.dest + '/**/*.html']
//    ]}))
    .pipe(gulp.dest(vars.metalsmith.dest + 'css'))
})

gulp.task('build', ['build-metalsmith', 'build-css']);
gulp.task('watch', ['watch-metalsmith', 'watch-css']);
gulp.task('default', ['build', 'server', 'watch']);


//gulp.task('default', hello)


/* import {default as nodemon} from 'gulp-nodemon'

{
  "ignore": ["site/*"],
  "ext": "js, hbs, less, md",
  "delay": "200ms"
}


'
gulp.task('demon', function () {
  nodemon({
    script: 'index.js',
    exec: 'babel-node',
    "verbose": true,
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function () {
      console.log('restarted!');
    });
});*/
