/// <binding />
// var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var bundleOutputDir = './build/dist/result';
module.exports = {
    mode: 'development', // Динамический режим
    watch: true, // Watch только в development
    entry: {
        'treeprojectedit-main': ['./scripts/app/main/treeprojectedit-main'],
    },
    devServer: {
        static: {
            // directory: path.join(__dirname, './build/dist/result'),
            directory: './',
        },
        open: true,
        port: 8080,
        hot: true,
    },
    resolve: {
        alias: {
            cldr$: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
            cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'),
            globalize: path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),
            jquerylayout: path.resolve(__dirname, 'scripts/lib/jquery-layout/jquery.layout'),
            appInit: path.resolve(__dirname, 'scripts/appInit'),
            managerLayouts: path.resolve(__dirname, 'scripts/app/common/ViewModel/managerLayouts'),
        },
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.join(__dirname, bundleOutputDir),
        filename: '[name].js', // Хеши в production
        chunkFilename: "[id].js", // contenthash вместо chunkhash
        publicPath: '/build/dist/result/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
        }),
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        }),
        new webpack.ProvidePlugin({
            ko: 'knockout',
            $: 'jquery',
            jQuery: 'jquery'
        })
    ].concat(
        [
            new webpack.SourceMapDevToolPlugin({
                filename: '[file].map',
                moduleFilenameTemplate: path.relative(bundleOutputDir, '[resourcePath]')
            })
        ]
    ),
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: '[name].[ext]',
                        limit: 8192 // Добавлен лимит
                    }
                }
            },
            {
                test: /\.ts$/,
                include: /scripts/,
                loader: 'ts-loader',
                options: { // options вместо query
                    silent: true
                }
            },
            { test: /\.html$/, loader: 'raw-loader' },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 25000
                }
            },
            // json-loader больше не нужен в webpack 4+
            // { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    // Добавьте секцию optimization для production
    optimization: {
        minimize: false,
        splitChunks: {
            chunks: 'all'
        }
    }
};