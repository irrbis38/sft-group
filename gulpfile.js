import gulp from "gulp"

// Импорт конфигов
import { path } from './gulp/config/path.js'
import { plugins } from './gulp/config/plugins.js'

// Импорт тасков
import { staticFiles } from "./gulp/tasks/static.js"
import { reset } from "./gulp/tasks/reset.js"
import { watcher } from "./gulp/tasks/watcher.js"
import { server } from "./gulp/tasks/server.js"
import { scss } from "./gulp/tasks/scss.js"
import { scripts } from "./gulp/tasks/scripts.js"
import { imgaes } from "./gulp/tasks/images.js"
import { sprite } from "./gulp/tasks/svgSprite.js"
import { fonts } from "./gulp/tasks/fonts.js"
import { njk } from "./gulp/tasks/njk.js"

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path,
    plugins,
    gulp
}

const tasks = gulp.series(fonts, gulp.parallel(staticFiles, njk, scss, scripts, imgaes, sprite))

const dev = gulp.series(reset, tasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, tasks)

export { dev }
export { build }

gulp.task('default', dev)