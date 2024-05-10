import webp from 'gulp-webp'
import imagemin from 'gulp-imagemin'
import cache from 'gulp-cache'
import size from 'gulp-size';
const imgaes = () => {
    return(
        app.gulp.src(app.path.src.images)
        .pipe(app.plugins.newer(app.path.build.images))
        .pipe(cache(imagemin({
            progressive: true
        })))
        .pipe(size())
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(webp())
        .pipe(size({
            title: 'webp'
        }))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())
    )
}

export { imgaes }