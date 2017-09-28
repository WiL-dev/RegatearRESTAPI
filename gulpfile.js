const gulp= require('gulp')
    , merge= require('merge-stream')
    , clean= require('gulp-dest-clean')
    , changed= require('gulp-changed');

const dest= 'dist';

gulp.task('deploy', function() {
    return merge(gulp.src('vendor/**', { base: '.' }),
                 gulp.src('src/**', { dot: true }))
                .pipe(clean(dest))
                .pipe(changed(dest))
                .pipe(gulp.dest(dest));
});