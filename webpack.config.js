const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HTMLInlineCSSWebpackPlugin = require("html-inline-css-webpack-plugin")
  .default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const getEntry = (p) => {
  return fs.readdirSync(p).reduce((entries, name) => {
    entries[name] = `${p}${path.sep}${name}${path.sep}${name}.js`;
    return entries;
  }, {})
};

const entry = {
  ...getEntry(path.resolve(__dirname, 'src/pages/ui-kit')),
  ...getEntry(path.resolve(__dirname, './src/pages/pages')),
};

const htmlPlugins = Object.entries(entry).map((entr) => (
  new HtmlWebpackPlugin({
    filename: `${entr[0]}.html`,
    template: entr[1].replace(/(?<=\.)\w+$/, 'pug'),
    chunks: [entr[0]],
    inject: 'body',
    mobile: true
  })
));

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  return {
    mode: 'development',
    devtool: isProd ? false : 'inline-source-map',
    stats: { children: true, },
    entry,
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'docs'),
      assetModuleFilename: 'images/[name][ext][query]'
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
        '@src': path.resolve(__dirname, 'src'),
        '@styles': path.resolve(__dirname, 'src/common.styles'),
        '@scripts': path.resolve(__dirname, 'src/common.scripts'),
        '@library': path.resolve(__dirname, 'src/library.blocks'),
      },
    },
    devServer: {
      compress: true,
      port: 8080,
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            chunks: 'all',
          },
          commonStyles: {
            test: /(library\.blocks|layout|node_modules|fonts).*\.(sass|css)$/,
            chunks: 'all',
            name: 'common.styles'
          },
          commonScripts: {
            test: /library\.blocks.*\.js$/,
            chunks: 'all',
            name: 'common.scripts'
          }
        }
      },
      minimizer: [
        `...`,
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: [
              'default',
              {
                discardComments: { removeAll: true },
              },
            ],
          },
        }),
      ]
    },
    plugins: [
      new ESLintPlugin(),
      new MiniCssExtractPlugin(),
      new HTMLInlineCSSWebpackPlugin({
        filter(fn) {
          return !fn.includes('common');
        },
      }),
      ...htmlPlugins,
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader'
          ],
        },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(svg|png|jpe?g|gif|webp)$/i,
          type: 'asset/resource',
          exclude: [
            path.resolve(__dirname, 'src/fonts'),
            path.resolve(__dirname, 'src/favicons')
          ],
        },
        {
          test: /\.(svg|png|ico)$/i,
          type: 'asset/resource',
          include: path.resolve(__dirname, 'src/favicons'),
          generator: {
            filename: 'favicons/[name][ext][query]'
          },
        },
        {
          test: /\.(svg|ttf|otf|eot|woff)$/i,
          type: 'asset/resource',
          include: path.resolve(__dirname, 'src/fonts'),
          generator: {
            filename: 'fonts/[name][ext][query]'
          },
        },
        {
          test: /\.pug$/,
          use: {
            loader: 'simple-pug-loader',
            options: {
              root: path.resolve(__dirname, 'src/library.blocks')
            },
          }
        }
      ]
    }
  };
}

