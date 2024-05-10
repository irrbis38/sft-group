import njkRender from "gulp-nunjucks-render"
import htmlmin from "gulp-htmlmin";

export const njk = () => {
    return app.gulp.src(app.path.src.njk)
        .pipe(njkRender({
            path: 'src'
        }))
        .pipe(app.plugins.replace(/@img\//g, '/assets/img/'))
        .pipe(htmlmin({ collapseWhitespace: true, conservativeCollapse: true }))
        .pipe(app.gulp.dest(app.path.build.html))
        .pipe(app.plugins.browserSync.stream())
}