/// <binding />
var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var bundleOutputDir = './build/dist/result';
var vendorManifestPath = path.resolve(__dirname, 'build/dist/vendor/vendor-manifest.json');
var dllPlugins = fs.existsSync(vendorManifestPath)
    ? [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require(vendorManifestPath)
        })
    ]
    : [];
module.exports = {
    mode: 'development',
    watch: false,
    entry: {
        'treeprojectedit-main': ['./scripts/app/main/treeprojectedit-main'],
    },

    resolve: {
        alias: {
            cldr$: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
            cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'),
            globalize: path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),

            //helpers
            jquerylayout: path.resolve(__dirname, 'scripts/lib/jquery-layout/jquery.layout'),

            //viewmodel commons
            appInit: path.resolve(__dirname, 'scripts/appInit'),
            managerLayouts: path.resolve(__dirname, 'scripts/app/common/ViewModel/managerLayouts'),
        },
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js',
        chunkFilename: "[id].[chunkhash].js",
        publicPath: '/build/dist/result/'
    },
    devServer: {
        contentBase: [
            path.join(__dirname, 'dist'),
            path.join(__dirname, 'build/dist/result')
        ],
        watchContentBase: true,
        publicPath: '/build/dist/result/',
        port: 9000,
        hot: true,
        compress: true,
        historyApiFallback: true,
        writeToDisk: true,
        overlay: {
            warnings: false,
            errors: true
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        stats: 'minimal'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: "url-loader?name=[name].[ext]"
            },
            { test: /\.ts$/, include: /scripts/, loader: 'ts-loader', query: { silent: true } },
            { test: /\.html$/, loader: 'raw-loader' },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader', query: { limit: 25000 } },
            // { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            filename: path.resolve(__dirname, 'dist/index.html'),
            inject: 'body'
        }),
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        })
    ]
        .concat(dllPlugins)
        .concat(
            isDevBuild ? [
                new webpack.SourceMapDevToolPlugin({
                    filename: '[file].map', // Remove this line if you prefer inline source maps
                    moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]') // Point sourcemap entries to the original file locations on disk
                }),
                new webpack.ProvidePlugin({
                    ko: 'knockout',
                    $: 'jquery',
                    jQuery: 'jquery'
                })] : [
                //new webpack.optimize.OccurrenceOrderPlugin(),
                //new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
                new webpack.ProvidePlugin({
                    ko: 'knockout',
                    $: 'jquery',
                    jQuery: 'jquery'
                })
            ]
        )
};
