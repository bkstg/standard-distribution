var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');
var path = require('path');
var LiveReloadPlugin = require('webpack-livereload-plugin');

Encore
    // the project directory where compiled assets will be stored
    .setOutputPath('public/build/')

    // the public path used by the web server to access the previous directory
    .setPublicPath('/build')
    .addEntry('js/app', './assets/js/app.js')
    .addStyleEntry('css/app', './assets/css/app.scss')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())

    // Add plugins.
    .autoProvidejQuery()
    .addPlugin(new webpack.ProvidePlugin({ _: 'underscore' }))
    .addPlugin(new webpack.ProvidePlugin({ Popper: ['popper.js', 'default'] }))
    .addPlugin(new LiveReloadPlugin())

    // Add aliases to bundles.
    .addAliases({
        '@BkstgCoreBundle': path.resolve(__dirname, './vendor/bkstg/core-bundle'),
        '@BkstgNoticeBoardBundle': path.resolve(__dirname, './vendor/bkstg/notice-board-bundle'),
        '@BkstgScheduleBundle': path.resolve(__dirname, './vendor/bkstg/schedule-bundle')
    })

    // Settings for output.
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
;

module.exports = Encore.getWebpackConfig();
