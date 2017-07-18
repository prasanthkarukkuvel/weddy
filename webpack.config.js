(function() {
    'use strict';

    var webpack = require("webpack");
    var os = require("os");

    module.exports = {
        devtool: 'sourcemap',
        entry: {
            app: ['babel-polyfill', './modules/app.ts'],
            common: ['rxjs', 'immutable']
        },
        output: {
            path: __dirname + '/app/js',
            filename: '[name].js',
            publicPath: __dirname + '/',
        },
        target: 'web',
        plugins: [
            new webpack.NoErrorsPlugin(),
            //  new webpack.optimize.DedupePlugin(),
            new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
            new webpack.optimize.UglifyJsPlugin()
        ],
        module: {
            preLoaders: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'jshint-loader',
            }, {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components|typings)/,
                loader: 'tslint-loader',
            }, ],
            loaders: [{
                test: /\.html$/,
                loader: 'raw',
                exclude: /(bower_components)/,
            }, {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader?optional=runtime',
                query: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime'],
                    cacheDirectory: true
                },
            }, {
                test: /\.ts$/,
                exclude: /(node_modules|bower_components|typings)/,
                loader: 'babel-loader?presets[]=es2015,plugins[]=transform-runtime,cacheDirectory!ts-loader'
            }, ],
            resolve: {
                extensions: ['.js', '.ts'],
            },
        },
        devServer: {
            port: 8086,
            host: os.hostname(),
            contentBase: 'app/',
            hot: false,
            lazy: true,
            stats: {
                colors: true,
            },
            historyApiFallback: {
                index: '/index.html',
                rewrites: [{
                    from: /\/auth/,
                    to: '/auth/index.html',
                }, ],
            },
        },
    };
})();
