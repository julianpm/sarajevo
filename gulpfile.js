var gulp   = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync'),
		minifycss    = require('gulp-minify-css'),
		reload = browserSync.reload;

gulp.task('bs', function(){
	browserSync.init({
		// proxy:'http://localhost:3000/restaurantpsd'
		server:{
			baseDir: './'
		}
	});
});

gulp.task('default', ['bs','styles', 'watch']);

gulp.task('styles', function() {
	return gulp.src('gulp/src/scss/*.scss')
		.pipe(sass({
			'sourcemap=none': true,
			errLogToConsole: true
		}))
		.pipe(concat('app.css'))
		.pipe(minifycss())
		.pipe(gulp.dest('assets/'))
		.pipe(autoprefixer('last 5 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
		.pipe(reload({ stream:true }));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
	gulp.watch('gulp/src/scss/*.scss', ['styles']);
	gulp.watch('**/*.php', reload);
});