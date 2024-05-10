import gulp from 'gulp'
import concat from 'gulp-concat'
import includePaths from 'rollup-plugin-includepaths';
import babel from 'gulp-babel';

const appJs = () => {
    return app.gulp.src(app.path.src.js)
        .pipe(app.plugins.sourcemaps.init())
        .pipe(app.plugins.rollup({
            input: [
                './src/assets/js/app.js'
            ],
            output: {
                format: 'esm',
                dir: 'dist'
            },
            plugins: [
                includePaths({ paths: ['src'] }),
                babel({
                    presets: ['@babel/env']
                })
            ]
        }))
        .pipe(app.plugins.sourcemaps.write('.'))
        .pipe(app.gulp.dest(app.path.build.js))
        .pipe(app.plugins.browserSync.stream())
}

const modules = () => {
    return app.gulp.src(app.path.src.jsModules)
        .pipe(app.plugins.sourcemaps.init())
        .pipe(app.plugins.sourcemaps.write('.'))
        .pipe(app.gulp.dest(app.path.build.jsModules))
        .pipe(app.plugins.browserSync.stream())
}

const libsJs = () => {
    return app.gulp.src(app.path.src.libs.js, { allowEmpty: true })
        .pipe(concat('libs.min.js'))
        .pipe(app.plugins.uglify())
        .pipe(app.gulp.dest(app.path.build.jsLibs))
        .pipe(app.plugins.browserSync.stream())
}

const scripts = gulp.parallel(appJs, modules, libsJs)

export { scripts }