import { staticFiles } from "./static.js"
import { njk } from "./njk.js"
import { scss } from "./scss.js"
import { scripts } from "./scripts.js"
import { imgaes } from "./images.js"
import { sprite } from "./svgSprite.js"
import { fonts } from "./fonts.js"
export const watcher = () => {
    app.gulp.watch(app.path.watch.static, staticFiles)
    app.gulp.watch(app.path.watch.njk, njk)
    app.gulp.watch(app.path.watch.scss, scss)
    app.gulp.watch(app.path.watch.js, scripts)
    app.gulp.watch(app.path.watch.images, imgaes)
    app.gulp.watch(app.path.watch.svgSprite, sprite)   
    app.gulp.watch(app.path.watch.fonts, fonts)   
}