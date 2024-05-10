import browserSync from "browser-sync"
import rename from "gulp-rename"
import newer from "gulp-newer"
import replace from "gulp-replace"
import sourcemaps from'gulp-sourcemaps'
import uglify from 'gulp-uglify';
import rollup from 'gulp-rollup';

export const plugins = {
    browserSync,
    rename,
    newer,
    replace,
    sourcemaps,
    uglify,
    rollup
}