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
mix.scripts([
    'node_modules/bootstrap/dist/js/bootstrap.min.js'
],'public/js/app.js').styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
],'public/css/app.css');

mix.webpackConfig({
    entry: './resources/js/index.js',
    output: {
        path: path.resolve(__dirname,'public/js'),
        filename: 'funcionalidad.js'
    },
    mode: 'development'
});

mix.styles([
    'node_modules/font-awesome/css/font-awesome.min.css'
],'public/css/font-awesome.min.css');



mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
