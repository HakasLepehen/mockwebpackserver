/// <binding />
var isDevBuild = process.argv.indexOf('--env.prod') < 0;
var path = require('path');
var webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


var bundleOutputDir = './build/dist/result';
module.exports = {
    mode: 'development',
    watch: true,
    entry: {
        'dictionarydocumenttype-main': ['./scripts/app/main/dictionarydocumenttype-main'],
        'dictionarysectiontype-main': ['./scripts/app/main/dictionarysectiontype-main'],


        'treeprojectedit-main': ['./scripts/app/main/treeprojectedit-main'],

        'treeprojectexpertmanager-main': ['./scripts/app/main/treeprojectexpertmanager-main'],
        'customertreeproject-main': ['./scripts/app/main/customertreeproject-main'],
        'projectlocaldata-main': ['./scripts/app/main/projectlocaldata-main'],
        'globalsearchcustomer-main': ['./scripts/app/main/globalsearchcustomer-main'],
        'globalsearchmanager-main': ['./scripts/app/main/globalsearchmanager-main'],
        'choosetome-main': ['./scripts/app/main/choosetome-main'],

        'dictionarystatus-main': ['./scripts/app/main/dictionarystatus-main'],
        'dictionaryprojects-main': ['./scripts/app/main/dictionaryprojects-main'],

        'dictionarycontracts-main': ['./scripts/app/main/dictionarycontracts-main'],

        'dictionarycustomers-main': ['./scripts/app/main/dictionarycustomers-main'],
        'cfodictionary-main': ['./scripts/app/main/cfodictionary-main'],
        'shorttitlesworkdictionary-main': ['./scripts/app/main/shorttitlesworkdictionary-main'],
        'typejobdictionary-main': ['./scripts/app/main/typejobdictionary-main'],
        'subdivisiondictionary-main': ['./scripts/app/main/subdivisiondictionary-main'],
        'workandholidaydictionary-main': ['./scripts/app/main/workandholidaydictionary-main'],
        'subdivisionbranchdictionary-main': ['./scripts/app/main/subdivisionbranchdictionary-main'],
        'dictionarycustomersedit-main': ['./scripts/app/main/dictionarycustomersedit-main'],
        'templateproject-main': ['./scripts/app/main/templateproject-main'],
        'exportfiles-main': ['./scripts/app/main/exportfiles-main'],
        'projectsubcontract-main': ['./scripts/app/main/projectsubcontract-main'],
        'calendarschedule-main': ['./scripts/app/main/calendarschedule-main'],
        'reportprojectbytemplate-main': ['./scripts/app/main/reportprojectbytemplate-main'],
        'personalworktask-main': ['./scripts/app/main/personalworktask-main'],
        'personalsubcontractworktask-main': ['./scripts/app/main/personalsubcontractworktask-main'],
        'businessprocessstatusesdictionary-main': ['./scripts/app/main/businessprocessstatusesdictionary-main'],
        'businessprocessactiontemplatedictionary-main': ['./scripts/app/main/businessprocessactiontemplatedictionary-main'],
        'regulationsunitdictionary-main': ['./scripts/app/main/regulationsunitdictionary-main'],
        'rolesapprovingpsddictionary-main': ['./scripts/app/main/rolesapprovingpsddictionary-main'],
        'rolesapprovingpsdbranchdictionary-main': ['./scripts/app/main/rolesapprovingpsdbranchdictionary-main'],
        'agreementdictionary-main': ['./scripts/app/main/agreementdictionary-main'],
        'agreementhistory-main': ['./scripts/app/main/agreementhistory-main'],
        'agreementbranchreport-main': ['./scripts/app/main/agreementbranchreport-main'],
        'agreementreport-main': ['./scripts/app/main/agreementreport-main'],
        'dictionarystagetype-main': ['./scripts/app/main/dictionarystagetype-main'],
        'dictionarysubjecttype-main': ['./scripts/app/main/dictionarysubjecttype-main'],
        'reportstatusdocuments-main': ['./scripts/app/main/reportstatusdocuments-main'],
        'userprofile-main': ['./scripts/app/main/userprofile-main'],
        'usercustomerprofile-main': ['./scripts/app/main/usercustomerprofile-main'],
        'journaltransferringpsd-main': ['./scripts/app/main/journaltransferringpsd-main'],
        'customerinorganizations-main': ['./scripts/app/main/customerinorganizations-main'],
        'templatekg-main': ['./scripts/app/main/templatekg-main'],
        'reportlogactionkg-main': ['./scripts/app/main/reportlogactionkg-main'],
        'reportsummarytask-main': ['./scripts/app/main/reportsummarytask-main'],
        'reportsummarytaskresult-main': ['./scripts/app/main/reportsummarytaskresult-main'],
        'ganttproductionworktask-main': ['./scripts/app/main/ganttproductionworktask-main'],
        'ganttprogressproductionworktask-main': ['./scripts/app/main/ganttprogressproductionworktask-main'],
        'ganttaggregatevehaworktask-main': ['./scripts/app/main/ganttaggregatevehaworktask-main'],
        'reportfileworktimeprojectsusers-main': ['./scripts/app/main/reportfileworktimeprojectsusers-main'],
        'reportfileworktimeprojectsusersresult-main': ['./scripts/app/main/reportfileworktimeprojectsusersresult-main'],
        'reportsubcontractscp-main': ['./scripts/app/main/reportsubcontractscp-main'],
        'reportlogactions-main': ['./scripts/app/main/reportlogactions-main'],
        'personalnotificationsettings-main': ['./scripts/app/main/personalnotificationsettings-main'],
        'dictionaryuserprofile-main': ['./scripts/app/main/dictionaryuserprofile-main'],
        'personalnotificationlist-main': ['./scripts/app/main/personalnotificationlist-main'],
        'searchwaybills-main': ['./scripts/app/main/searchwaybills-main'],
        'reportworkofproductiondepartments-main': ['./scripts/app/main/reportworkofproductiondepartments-main'],
        'reporttransferpaperversion-main': ['./scripts/app/main/reporttransferpaperversion-main'],
        'subsubcontractordictionary-main': ['./scripts/app/main/subsubcontractordictionary-main'],
        'subcontractordictionary-main': ['./scripts/app/main/subcontractordictionary-main'],
        'reportfileduplicatedata-main': ['./scripts/app/main/reportfileduplicatedata-main'],
        'dictionaryEPZ-main': ['./scripts/app/main/dictionaryEPZ-main'],
        'projectepz-main': ['./scripts/app/main/projectepz-main'],
        'dictionarycso-main': ['./scripts/app/main/dictionarycso-main'],      
        'reportdeclarationgge-main': ['./scripts/app/main/reportdeclarationgge-main'],
        'reporttransferprojecttocso-main': ['./scripts/app/main/reporttransferprojecttocso-main'],
        'reportagreementpsdcomments-main': ['./scripts/app/main/reportagreementpsdcomments-main'],
        'reportregistrationrvi-main': ['./scripts/app/main/reportregistrationrvi-main'],
        'dictionaryidtutypes-main': ['./scripts/app/main/dictionaryidtutypes-main'],
        'reportobjectbasedchecklist-main': ['./scripts/app/main/reportobjectbasedchecklist-main'],
        'reportsummarizedchecklist-main': ['./scripts/app/main/reportsummarizedchecklist-main'],
        'reportschemeswithoutqr-main': ['./scripts/app/main/reportschemeswithoutqr-main'],
        'reportrequestsde-main': ['./scripts/app/main/reportrequestsde-main'],
        'reportdepartmentexpertise-main': ['./scripts/app/main/reportdepartmentexpertise-main'],
        'objectgraphs-main': ['./scripts/app/main/objectgraphs-main'],
        'customerrequestmessages-main': ['./scripts/app/main/customerrequestmessages-main'],
        'customerrequestsdocs-main': ['./scripts/app/main/customerrequestsdocs-main'],
        'automatedpurification-main': ['./scripts/app/main/automatedpurification-main'],
        'reportagreementtomesemployeesca-main': ['./scripts/app/main/reportagreementtomesemployeesca-main'],
        'dictionarycoordinationinitialdata-main': ['./scripts/app/main/dictionarycoordinationinitialdata-main'],
        'coordinationgraphroles-main': ['./scripts/app/main/coordinationgraphroles-main'],




        //'geolocationproject-main': ['./scripts/app/main/geolocationproject-main']
        //'main-customers': ['./scripts/app/areas/admin/viewmodels/profilemanager/main-customers'],
        //'main-stagetype': ['./scripts/app/areas/admin/viewmodels/dictionary/main-stagetype'],
        //'main-sectiontype': ['./scripts/app/areas/admin/viewmodels/dictionary/main-sectiontype'],
        //'main-subjecttype': ['./scripts/app/areas/admin/viewmodels/dictionary/main-subjecttype'],
        //'main-profile': ['./scripts/app/viewmodels/person/main-profile'],



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
            { test: /\.json$/, loader: 'json-loader' }
        ]
    },
    //optimization: {
    //    splitChunks: {
    //        chunks: 'all',
    //        cacheGroups: {
    //            defaultVendors: {
    //                filename: 'common.js'
    //            }
    //        }
    //    }
    //},
    plugins: [
        new BundleAnalyzerPlugin(),
        new ProgressBarPlugin({
            format: 'Build [:bar] :percent (:elapsed seconds)',
            clear: false,
        }),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./build/dist/vendor/vendor-manifest.json')
        })]
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
