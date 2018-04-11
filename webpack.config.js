// Plugins and the like.
var webpack = require('webpack');
var Encore = require('@symfony/webpack-encore');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
    // Create output paths and main entry points.
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .addEntry('main', './app/Resources/assets/js/main.js')
    .addStyleEntry('global', './app/Resources/assets/css/global.scss')

    // Schedule configuration.
    .addEntry('calendar', './app/Resources/assets/js/calendar.js')
    .addPlugin(new CopyWebpackPlugin([
        { from: './node_modules/bootstrap-calendar', to: 'components/bootstrap-calendar' },
    ]))

    // Add plugins.
    .autoProvidejQuery()
    .addPlugin(new webpack.ProvidePlugin({ _: 'underscore' }))
    .addPlugin(new webpack.ProvidePlugin({ Popper: ['popper.js', 'default'] }))
    .addPlugin(new LiveReloadPlugin())

    // Settings for output.
    .cleanupOutputBeforeBuild()
    .enableSassLoader()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
;

module.exports = Encore.getWebpackConfig();
