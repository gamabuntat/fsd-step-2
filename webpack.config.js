const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.sass/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.pug/,
                use: ['html-loader',
                {
                    loader: 'pug-html-loader',
                    options: {
                        pretty: true
                    },
                },
                ],
            }
        ]
    }
}

