var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',

    entry:   __dirname + "/app/main.js",
    output: {
        path: __dirname + "/js",
        filename:  "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },

    devServer: {
        contentBase: "./public",
        inline: true
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}