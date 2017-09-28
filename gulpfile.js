const gulp= require('gulp')
    , merge= require('merge-stream')
    , clean= require('gulp-dest-clean')
    , changed= require('gulp-changed')
    , exec= require('child_process').exec;

const dest= 'dist'
    , localhostFolder= '/home/wil/www/regatearapi.test/public_html/'
    , cmdDeployLocalhost= 'rsync -cr ./' + dest + '/ ' + localhostFolder;

gulp.task('prepare_deploy', function() {
    return merge(gulp.src('vendor/**', { base: '.' }),
                 gulp.src('src/**', { dot: true }))
                .pipe(clean(dest))
                .pipe(changed(dest))
                .pipe(gulp.dest(dest));
});

gulp.task('deploy', ['prepare_deploy'], function(){
    exec(cmdDeployLocalhost);
});