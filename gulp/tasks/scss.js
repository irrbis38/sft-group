import gulp from 'gulp'
import concatCss from 'gulp-concat-css'
import cleanCss from 'gulp-clean-css'

import dartSass from 'sass'
import gulpSass from 'gulp-sass'

const sass = gulpSass(dartSass)

const appScss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.sourcemaps.init())
        .pipe(sass({
            includePaths: [
                'src'
            ]
        }))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(app.plugins.sourcemaps.write('.'))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}

const libsCss = () => {
    return app.gulp.src(app.path.src.libs.css)
        .pipe(concatCss('libs.min.css'))
        .pipe(cleanCss())
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}

const scss = gulp.parallel(appScss, libsCss)

export { scss }