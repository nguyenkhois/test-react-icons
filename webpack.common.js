const path = require('path');
const WebpackNotifierPlugin = require("webpack-notifier");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const customConfigs = require('./webpack.custom'); // Using your own configs

module.exports = {
    entry: customConfigs.entryPoints,// which file to begin with, 
    output: {
        path: path.resolve(__dirname, customConfigs.distDir), // what folder to put bundle in
        filename: '[name].[hash].js' // what name to use for bundle
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new WebpackNotifierPlugin({ alwaysNotify: true }),
        new HtmlWebpackPlugin({ template: customConfigs.htmlTemplate }),
        new CleanWebpackPlugin(),
        new WriteFilePlugin({
            test: /\.(png|jpg|gif|svg)$/i
        }),
        new CopyWebpackPlugin([
                {from:'src/images',to:'images'}
        ])
    ]
};