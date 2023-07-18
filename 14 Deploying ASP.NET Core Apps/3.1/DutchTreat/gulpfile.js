/// <binding AfterBuild='default' />
const gulp = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function minify() {
  var js = gulp.src(["wwwroot/js/**/*.js"])
    .pipe(uglify())
    .pipe(concat("dutchtreat.min.js"))
    .pipe(gulp.dest("wwwroot/dist/"));

  return js;
}

function styles() {
  var css = gulp.src(["wwwroot/css/**/*.css"])
    .pipe(uglify())
    .pipe(concat("dutchtreat.min.css"))
    .pipe(gulp.dest("wwwroot/dist/"));

  return css;
}


exports.styles = styles;
exports.minify = minify;
exports.default = gulp.parallel(styles, minify)