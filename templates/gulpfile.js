var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-ruby-sass');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var jsmin = require('gulp-jsmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

var assetsDir = 'app/assets/';
var publicfolder = 'public/';
 
// Where do you store your Sass files?
var sassDir = assetsDir + 'stylesheets';
var jsDir = assetsDir + 'javascripts'; 

// Which directory should Sass compile to?
var targetCSSDir = publicfolder + 'css';
var targetJSDir = publicfolder + 'js';
 
// Compile Sass, autoprefix CSS3,
// and save to target CSS directory
gulp.task('css', function () {
    return gulp.src(sassDir + '/bootstrap.scss')
        .pipe(sass({ sourcemap: true }).on('error', gutil.log))
        //.pipe(autoprefix('last 10 version'))
        .pipe(gulp.dest(targetCSSDir));
});

gulp.task('js', function() {
    return gulp.src(jsDir + '/**/*.js')
    	.pipe(concat('bootstrap.js'))
       	.pipe(jsmin().on('error', gutil.log))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(targetJSDir));	
});
 
// Keep an eye on Sass, Coffee, and PHP files for changes...
gulp.task('watch', function () {
    gulp.watch(sassDir + '/**/*.scss', ['css']);
    gulp.watch(jsDir + '/**/*.js', ['js']);
});
 
// What tasks does running gulp trigger?
gulp.task('default', ['css', 'js', 'watch']);