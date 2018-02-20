let mix = require('laravel-mix');
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your application.
 |
 */

mix.setPublicPath('./');

const publicDir = 'public';

const build = 'build';

const assets = publicDir + '/assets';

mix.browserSync({
    proxy: '',
    server: {
        baseDir: 'public',
        directory: false,
    },
    files: [publicDir + '/*.html', assets + '/css/*.css', assets + '/js/*.js'],
    open: false,
    reloadDelay: 1000,
    ghostMode: false,
});

mix.sass(build + '/scss/styles.scss', assets + '/css/styles.css');

mix.react(build + '/js/main.js', assets + '/js/script.bundle.js');

mix
    .copy(build + '/fonts', assets + '/fonts', false)
    .copy(build + '/images', assets + '/images', false);

mix
    .options({
        processCssUrls: false,
    })
    .disableNotifications();

if (!mix.inProduction()) {
    mix.sourceMaps();
}
