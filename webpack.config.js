const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')
const Dotenv = require('dotenv-webpack');

require('dotenv').config()

module.exports = {
    mode: process.env.NODE_ENV,
    entry:  path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/',
        filename: 'js/[contenthash].js'
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: [
                  'babel-loader' 
                ],
                exclude: /(node_modules|public)/
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                        limit: 8192,
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
        }),
        new RemovePlugin({
            before: {
                include: ['./public'],
                exclude: ['./storage'],
            },
            watch: {
                root: './public',
                exclude: ['./storage']
            },
        }),
        new Dotenv()
    ]
}