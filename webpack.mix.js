const {mix} = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'bower_components/jquery/dist/jquery.min.js',
    'bower_components/bootstrap/dist/js/bootstrap.min.js'
], 'public/js/core.common.js')
    .styles([
        'bower_components/owl.carousel/dist/owl.carousel.min.js'
    ],'public/js/core.js')
    .styles([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css'
    ], 'public/css/app.common.css')
    .styles([
        'bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        'bower_components/owl.carousel/dist/assets/owl.theme.default.min.css'
    ],'public/css/app.css')
    .styles([
        'resources/assets/js/frontend.js'
    ], 'public/js/frontend.js')
    .sass('resources/assets/sass/frontend.scss', 'public/css').options({processCssUrls: false})
    .sass('resources/assets/sass/backend.scss', 'public/css').options({processCssUrls: false})
    .copy([
        'bower_components/bootstrap/fonts/**',
        'bower_components/font-awesome/fonts/**'
    ], 'public/fonts')
