import gulp from 'gulp'
import ttf2woff2 from 'gulp-ttf2woff2';
import ttf2woff from 'gulp-ttf2woff';

const font = () => {
    return app.gulp.src(`${app.path.src.fonts}/**/*.{otf,ttf}`)
    .pipe(app.gulp.dest(app.path.build.fonts))
}

const fontToWoff = () => {
    return app.gulp.src(`${app.path.src.fonts}/**/*.{otf,ttf}`)
        .pipe(ttf2woff())
        .pipe(app.gulp.dest(app.path.build.fonts))
}

const fontToWoff2 = () => {
    return app.gulp.src(`${app.path.src.fonts}/**/*.{otf,ttf}`)
        .pipe(ttf2woff2())
        .pipe(app.gulp.dest(app.path.build.fonts))
}

const fonts = gulp.parallel(font, fontToWoff, fontToWoff2)

export { fonts }
