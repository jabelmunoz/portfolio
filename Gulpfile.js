"use strict";

var gulp = require("gulp"),
		browserSync = require("browser-sync"),
		sass = require("gulp-sass");

// Compiles all gulp tasks
gulp.task('default', ['watch']);
//gulp.task('default', ['build']);

// Live reload anytime a file changes
gulp.task("watch", ["browserSync", "sass"], function() {
	gulp.watch("src/scss/**/*.scss", ["sass"]);
	gulp.watch("*.html").on("change", browserSync.reload);
});

// Spin up a server
gulp.task("browserSync", function() {
	browserSync({
		server: {
			baseDir: ""
		}
	})
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.reload({
			stream: true
		}));
});

// Compile SASS files
//gulp.task("sass", function() {
	//gulp.src("src/scss/**/*.scss")
		//.pipe(gulp.dest("src/css"))
		//.pipe(browserSync.reload({
			//stream: true
		//}))
//});
