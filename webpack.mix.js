const mix = require('laravel-mix');
const path = require('path');
const paht = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    entry: './resources/js/index.js',
    output: {
        path: path.resolve(__dirname,'public/js'),
        filename: 'funcionalidad.js'
    },
    mode: 'development'
});

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
