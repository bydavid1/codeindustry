const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'public/'),
        filename: 'js/app.js'
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
                test: /\.(png|jpg|gif)$/i,
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
            filename: 'css/[name].css'
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}