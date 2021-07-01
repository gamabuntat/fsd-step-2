const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    children: true,
  },
  entry: {
    'index': './src/pages/index/index.js',
    'form-elements': './src/pages/ui-kit/form-elements/form-elements.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      '@src': path.resolve(__dirname, 'src'),
      '@common': path.resolve(__dirname, 'src/common.styles'),
      '@library': path.resolve(__dirname, 'src/library.blocks'),
    },
  },
  devServer: {
    noInfo: true,
    compress: true,
    open: true,
    port: 9000,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
        default: {
          test: /.*/,
          chunks: 'all',
          reuseExistingChunk: true,
          name: 'test',
        },
      }
    },
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/pages/index/index.pug',
      chunks: ['index'],
      inject: 'body'
    }),
    new HtmlWebpackPlugin({
      filename: 'form-elements.html',
      template: './src/pages/ui-kit/form-elements/form-elements.pug',
      chunks: ['form-elements'],
      inject: 'body'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/i,
        exclude: [
          path.resolve(__dirname, 'src/fonts'),
          path.resolve(__dirname, 'src/favicons')
        ],
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
        test: /\.(svg|png|ico)$/i,
        include: path.resolve(__dirname, 'src/favicons'),
        use: 
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'favicons',
            }
          },
      },
      {
        test: /\.(svg|ttf|otf|eot|woff)$/i,
        include: path.resolve(__dirname, 'src/fonts'),
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
          options: {
            root: path.resolve(__dirname, 'src/library.blocks')
          },
        }
      }
    ]
  }
}
