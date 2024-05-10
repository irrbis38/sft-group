const buildFolder = './dist'
const srcFolder = './src'

export const path = {
    build: {
        js: `${buildFolder}`,
        jsModules: `${buildFolder}/assets/js/modules`,
        jsLibs: `${buildFolder}/assets/js`,
        css: `${buildFolder}/assets/css`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/assets/img`,
        static: `${buildFolder}/assets`,
        svgSprite: `${buildFolder}/assets/css`,
        fonts: `${buildFolder}/assets/fonts`
    },
    src: {
        libs: {
            js: `${srcFolder}/assets/libs/js/*.js`,
            css: `${srcFolder}/assets/libs/css/*.css`
        },
        js: [`${srcFolder}/**/*.js`],
        jsModules: `${srcFolder}/assets/js/modules/**/*.js`,
        scss: [`${srcFolder}/assets/scss/app.scss`],
        njk: `${srcFolder}/pages/**/*.njk`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,svg}`,
        static: `${srcFolder}/assets/static/**/*.*`,
        svgSprite: `${srcFolder}/assets/sprite/*.svg`,
        fonts: `${srcFolder}/assets/fonts`,
    },
    watch: {
        js: `${srcFolder}/**/*.js`,
        scss: `${srcFolder}/**/*.{css,scss}`,
        njk: `${srcFolder}/**/*.njk`,
        images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,webp}`,
        static: `${srcFolder}/assets/static/**/*.*`,
        svgSprite: `${srcFolder}/assets/sprite/*.svg`,
        fonts: `${srcFolder}/assets/fonts/*.{otf,ttf}`
    },
    srcFolder,
    buildFolder
}
