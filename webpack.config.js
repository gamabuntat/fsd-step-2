const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    //watch: true,
    entry: {
        colorsAndType: './src/UI kit/Colors & Type/colors&type.js',
        formElements: './src/UI kit/Form Elements/formElements.js',
        cards: './src/UI kit/cards/cards.js',
        headersAndFooters: './src/UI kit/headers-and-footers/headers-and-footers.js',
        landing: './src/page/landing/landing.js',
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
            '@common': path.resolve(__dirname, 'src/common.blocks'),
            '@library': path.resolve(__dirname, 'src/library.blocks'),
        },
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
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
        new HtmlWebpackPlugin({
            filename: 'cards.html',
            template: './src/UI kit/cards/cards.pug',
            minify: 'false',
            chunks: ['cards'],
        }),
        new HtmlWebpackPlugin({
            filename: 'headers-and-footers.html',
            template: './src/UI kit/headers-and-footers/headers-and-footers.pug',
            minify: 'false',
            chunks: ['headersAndFooters'],
        }),
        new HtmlWebpackPlugin({
            filename: 'landing.html',
            template: './src/page/landing/landing.pug',
            minify: 'false',
            chunks: ['landing'],
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
                            limit: 8000,
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

