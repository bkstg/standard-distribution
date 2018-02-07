// webpack.config.js
var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .addEntry('main', './app/Resources/assets/js/main.js')
    .addStyleEntry('global', './app/Resources/assets/css/global.scss')
    .addPlugin(new webpack.ProvidePlugin({ Popper: ['popper.js', 'default'] }))
    .enableSassLoader()
    .autoProvidejQuery()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning()
;

// export the final configuration
config = Encore.getWebpackConfig();
config.plugins.push(new LiveReloadPlugin());
module.exports = config;
