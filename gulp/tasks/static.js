export const staticFiles = () => {
    return app.gulp.src(app.path.src.static)
        .pipe(app.gulp.dest(app.path.build.static))
}