//var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    node: {
        fs: 'empty'
    },
    resolve: {
        alias: {
            //globalize$: path.resolve(__dirname, 'node_modules/globalize/dist/globalize.js'),
            globalize: path.resolve(__dirname, 'node_modules/globalize/dist/globalize'),
            cldr$: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr.js'),
            cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'),
            jqueryui: path.resolve(__dirname, 'scripts/lib/jquery-ui/jquery-ui'),
            //cldr: path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr'),
            //'cldr/event': path.resolve(__dirname, 'node_modules/cldrjs/dist/cldr')
            //globalize: './node_modules/globalize/dist/globalize.js'
        },
        //root: [
        //    path.resolve('./ClientApp'),
        //],
        extensions: ['.js']
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
            { test: /\.js$/, loader: 'babel-loader', query: { presets: ['env'] }, exclude: /jstree/ },
            { test: /\.(png|jpg|jpeg|gif|svg)$/, loader: 'url-loader', query: { limit: 25000 } },
            //, { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    entry: {
        vendor: [
            'bootstrap',
            
            'knockout',
            'knockout-mapping',
            'knockout-postbox',
            /*'knockout-amd-helpers', */
            'jstree',
            'jquery',
            'tether',
            
            "./scripts/lib/ko-plus-promise/ko.plus",
            "babel-polyfill",
            //"./scripts/lib/jquery-ui/jquery-ui",
            "./scripts/lib/jquery-layout/jquery.layout",
            "isomorphic-fetch",
            //"globalize",
            //"devextreme/localization/messages/ru.json",
            "devextreme-aspnet-data",
            "./scripts/lib/devextremewebpack/gantt/dx-gantt.js",
            "./scripts/lib/DevExtremeWebPack/dx.custom.config.js",

            //css
            'bootstrap/dist/css/bootstrap.css',
            './scripts/lib/ko-plus-promise/ko.plus.css',
            './styles/lib/jquery-ui/jquery-ui.css',
            './styles/lib/jquery-ui/jquery-ui.structure.css',
            './styles/lib/jquery-layout/layout-default.css',
            './styles/lib/jquery.mb.extruder-master/mbextruder.css',
            './styles/lib/devextremewebpack/dx.common.css',
            './styles/lib/devextremewebpack/dx.light.css',
            './styles/lib/devextremewebpack/gantt/dx-gantt.css',
            './styles/lib/font-awesome-4.7.0/css/font-awesome.css',
            './scripts/lib/jstree/style.css',
            './scripts/lib/knockout-plus/ko.plus.css'
        ]
    },
    output: {
        path: path.join(__dirname, 'build', 'dist', 'vendor'),
        filename: '[name].js',
        library: '[name]_[hash]',
    },
    optimization: {
        minimizer: [
            // we specify a custom UglifyJsPlugin here to get source maps in production
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    ecma: 6,
                    mangle: true
                },
                sourceMap: false
            })
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether"
        }), // Maps these identifiers to the jQuery package (because Bootstrap expects it to be a global variable)
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'build', 'dist', 'vendor', '[name]-manifest.json'),
            name: '[name]_[hash]'
        })
    ]
};
