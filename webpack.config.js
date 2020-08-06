const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        colorsAndType: './src/UI kit/Colors & Type/colors&type.js',
        formElements: './src/UI kit/Form Elements/formElements.js',
    },
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
        new HtmlWebpackPlugin({
            filename: 'formElements.html',
            template: './src/UI kit/Form Elements/formElements.pug',
            minify: 'false',
            chunks: ['formElements'],
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
                exclude: [path.resolve(__dirname, 'src/fonts')],
                use: 
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'i',
                        }
                    },
            },
//            {
//                test: /\.(svg|png|jpg|gif)$/i,
//                use: [
//                    {
//                        loader: 'url-loader',
//                        options: {
//                            name: '[name].[ext]',
//                            esModule: false,
//                        },
//                    },
//                ],
//            },
            {
                test: /\.(svg|ttf|otf|eot|woff)$/i,
                include: [path.resolve(__dirname, 'src/fonts')],
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

