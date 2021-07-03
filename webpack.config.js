const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { getElementsByTagName } = require('domutils');
const isDev = process.env.NODE_ENV === 'development';

const getEntry = (path) => {
  return fs.readdirSync(path).reduce((entrys, name) => {
    entrys[name] = `${path}/${name}/${name}.js`;
    return entrys;
  }, {})
};

const entry = {
  ...getEntry('./src/pages/ui-kit'),
  ...getEntry('./src/pages/pages')
};

const HTMLPlugins = Object.entries(entry).map((entr) => (
  new HtmlWebpackPlugin({
    filename: `${entr[0]}.html`,
    template: entr[1].replace(/(?<=\.)\w+$/, 'pug'),
    chunks: [entr[0]],
    inject: 'body'
  })
));

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: {
    children: true,
  },
  entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
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
    noInfo: true,
    compress: true,
    open: false,
    port: 9000,
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
          name: 'common-styles'
        },
        commonScripts: {
          test: /library\.blocks.*\.js$/,
          chunks: 'all',
          name: 'common-scripts'
        }
      }
    },
  },
  plugins: [
    new ESLintPlugin(),
    new MiniCssExtractPlugin(),
    ...HTMLPlugins,
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
        test: /\.css$/i,
        use: [
           MiniCssExtractPlugin.loader,
          'css-loader',
        ]
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
