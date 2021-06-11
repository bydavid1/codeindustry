const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const RemovePlugin = require('remove-files-webpack-plugin')

module.exports = {
    entry: {
        portfolio: path.resolve(__dirname, 'src/portfolio/index.js'),
        blog: path.resolve(__dirname, 'src/blog/index.js')
    },
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
            filename: 'portfolio.html',
            template: 'portfolio.html',
            chunks: ['portfolio']
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'blog.html',
            chunks: ['blog']
        }),
        new RemovePlugin({
            before: {
                root: './public',
                exclude: ['./storage'],
                include: ['./css', './js']
            },
            watch: {
                root: './public',
                exclude: ['./storage']
            },
        })
    ]
}