const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    // colorsAndType: './src/UI kit/Colors & Type/colors&type.js',
    formElements: './src/UI kit/Form Elements/formElements.js',
    cards: './src/UI kit/cards/cards.js',
    headersAndFooters: './src/UI kit/headers-and-footers/headers-and-footers.js',
    landing: './src/page/landing/landing.js',
    searchRoom: './src/page/search-room/search-room.js',
    roomDetails: './src/page/room-details/room-details.js',
    // registration: './src/page/registration/registration.js',
    // signIn: './src/page/signIn/signIn.js',
    index: './src/page/index/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
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
    open: true,
    port: 9000,
  },
  plugins: [
    new ESLintPlugin(),
    // new HtmlWebpackPlugin({
    //   filename: 'colorsAndType.html',
    //   template: './src/UI kit/Colors & Type/colors&type.pug',
    //   minify: 'false',
    //   chunks: ['colorsAndType'],
    // }),
    new HtmlWebpackPlugin({
      filename: 'formElements.html',
      template: './src/UI kit/Form Elements/formElements.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['formElements'],
    }),
    new HtmlWebpackPlugin({
      filename: 'cards.html',
      template: './src/UI kit/cards/cards.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['cards'],
    }),
    new HtmlWebpackPlugin({
      filename: 'headers-and-footers.html',
      template: './src/UI kit/headers-and-footers/headers-and-footers.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['headersAndFooters'],
    }),
    new HtmlWebpackPlugin({
      filename: 'landing.html',
      template: './src/page/landing/landing.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['landing'],
    }),
    new HtmlWebpackPlugin({
      filename: 'search-room.html',
      template: './src/page/search-room/search-room.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['searchRoom'],
    }),
    // new HtmlWebpackPlugin({
    //   filename: 'registration.html',
    //   template: './src/page/registration/registration.pug',
    //   minify: 'false',
    //   chunks: ['registration'],
    // }),
    // new HtmlWebpackPlugin({
    //   filename: 'signIn.html',
    //   template: './src/page/signIn/signIn.pug',
      // favicon: './src/favicon/favicon-32x32.png',
    //   minify: 'false',
    //   chunks: ['signIn'],
    // }),
    new HtmlWebpackPlugin({
      filename: 'room-details.html',
      template: './src/page/room-details/room-details.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'true',
      chunks: ['roomDetails'],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/page/index/index.pug',
      favicon: './src/favicon/favicon-32x32.png',
      minify: 'false',
      chunks: ['index'],
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
        test: /\.(svg|png|jpe?g|gif|webp)$/i,
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
        test: /\.pug$/,
        use: 
        {
          loader: 'pug3-loader',
        }
      }
    ]
  }
}
