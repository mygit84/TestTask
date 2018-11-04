"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var rename = require("gulp-rename");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var csso = require("gulp-csso");
var server = require("browser-sync").create();
var imagemin = require("gulp-imagemin");
var posthtml = require("gulp-posthtml");
var htmlmin = require("gulp-htmlmin");
var include = require("posthtml-include");
var uglify = require("gulp-uglify");
var del = require("del");


gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
    imagemin.jpegtran({progressive: true})
    ]))
  .pipe(gulp.dest("source/img"));
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
 .pipe(htmlmin({ collapseWhitespace: true }))
 .pipe(gulp.dest("build"));
});

gulp.task("server", function () {
  server.init({
    server: "build/",
  });
    gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
    gulp.watch("source/img/icon-*.svg", gulp.series("html", "refresh"));
    gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("refresh", function (done) {
  server.reload();
  done();
});

gulp.task("copy", function () {
return gulp.src([
  "source/fonts/**/*.{woff,woff2,otf}",
  "source/img/**"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
return del("build");
});

gulp.task("js", function (done) {
gulp.src("source/js/*.js")
  .pipe(uglify())
  .pipe(gulp.dest("build/js"))
  done();
});

gulp.task("build", gulp.series("clean", "copy", "css", "html", "js"));
gulp.task("start", gulp.series("build", "server"));
