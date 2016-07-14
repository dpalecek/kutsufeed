// Currently, live reload is not working php files and css files are not injecting.

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Browser-sync task for starting the server
gulp.task('browser-sync', function() {
	//Initialize browsersync
	browserSync.init({
		server: "./"
	});

	gulp.watch("./sass/**/*.scss", ['sass'])
	gulp.watch("./**/*.html").on("change", reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("./sass/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});

gulp.task('default', ['sass', 'browser-sync']);
