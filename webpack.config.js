const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {colorsAndType: './src/UI kit/Colors & Type/colors&type.js' },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            '@src': path.resolve(__dirname, 'src'),
            '@dist': path.resolve(__dirname, 'dist'),
            '@library': path.resolve(__dirname, 'src/library.blocks'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'colorsAndType.html',
            template: './src/UI kit/Colors & Type/colors&type.pug',
            minify: 'false',
            chunks: ['colorsAndType'],
        }),
        //new CopyWebpackPlugin({
        //    patterns: [
        //        { from: 'src/library.blocks/i', to: 'colorsAndType' },
        //    ]
        //}),
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
                test: /\.(svg|png|jpe?g|gif)$/i,
                use: 
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'i',
                        }
                    },
            },
            {
                test: /\.(ttf|otf|eot|woff)$/i,
                use:
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts',
                        }
                    },
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

