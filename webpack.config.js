const path = require('path')

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
        ]
    }
}