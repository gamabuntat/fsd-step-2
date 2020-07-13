const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {colorsAndType: './src/UI kit/Colors & Type/colors&type.js' },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './')
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'colorsAndType.html',
            template: './src/UI kit/Colors & Type/colors&type.pug',
            minify: 'false',
            chunks: ['colorsAndType'],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
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

