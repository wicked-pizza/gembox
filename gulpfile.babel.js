import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import header from 'gulp-header'
import truthy from 'gulp-if'
import sass from 'gulp-sass'
import postcss from 'gulp-postcss'
import packageImporter from 'node-sass-package-importer'
import pug from 'gulp-pug'
import pkg from './package'

console.log(process.env.NODE_ENV)

const isProd = process.env.NODE_ENV === 'production'
const [src, dest] = ['./src', './dist/gem']

gulp.task('test', next => {
  return next()
})

gulp.task('sass', next => {
  gulp.src(['./src/**/*.scss'], { base: 'src' })
    .pipe(plumber(onError('[sass]')))
    .pipe(sass({
      importer: packageImporter({
        extensions: ['.scss', '.css']
      }),
      outputStyle: 'expanded'
    }))
    .pipe(truthy(isProd, postcss()))
    .pipe(gulp.dest(dest))
    .on('end', () => {
      return next()
    })
})

gulp.task('pug', next => {
  gulp.src(['./src/**/*.pug'], { base: 'src' })
    .pipe(plumber(onError('[pug]')))
    .pipe(pug({
      pretty: !isProd
    }))
    .pipe(gulp.dest(dest))
    .on('end', () => {
      return next()
    })
})

gulp.task('build', ['sass', 'pug'], next => {

})

gulp.task('watch', next => {
  gulp.watch(['./src/**/*.scss'], ['sass'])
  gulp.watch(['./src/**/*.pug'], ['pug'])
  return next()
})


gulp.task('default', ['build', 'watch'], next => {
  return next()
})

function onError (msg) {
  return { onError: notify.onError(`${msg} <%= error.message %>`) }
}

function stamp () {
  return dateFns.format(new Date(), 'YYYY/MM/DD HH:mm')
}

function banner () {
  return ['/**', fs.readFileSync('./docs/BANNER', 'utf8').replace(/^(.*)/gm, ' * $1'), ' */', ''].join('\n')
}