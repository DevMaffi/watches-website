// Modules

// path
import * as nodePath from 'path'

// plugins
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

// base utils
import { routes, entries } from '../utils/utils.js'

// functions
import functions from './functions.js'

// Config

const {
  baseDirs: { distDir, srcDir },
} = routes

const path = {
  distDir: nodePath.resolve(distDir),
  srcDir: nodePath.resolve(srcDir),
}

const { cssLoaders } = functions

const config = {
  context: path.srcDir,
  target: 'web',
  entry: entries,
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  resolve: {
    alias: {
      '@': `${path.srcDir}`,
      '@common': `${path.srcDir}/assets/js/modules/common`,
      '@files': `${path.srcDir}/assets/files`,
      '@i18n': `${path.srcDir}/assets/js/i18n`,
      '@images': `${path.srcDir}/assets/images`,
      '@model': `${path.srcDir}/assets/js/model`,
      '@modules': `${path.srcDir}/assets/js/modules`,
      '@sass': `${path.srcDir}/assets/sass`,
      '@services': `${path.srcDir}/assets/js/services`,
      '@svg': `${path.srcDir}/assets/svg`,
      '@utils': `${path.srcDir}/assets/js/utils`,
    },
    extensions: ['.js', '.json', '.sass', '.scss'],
  },
  output: { path: path.distDir },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        options: {
          minimize: false,
        },
      },
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/i,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false,
        },
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|ico|jpe?g|png|svg|webp)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        type: 'asset/resource',
      },
    ],
  },
}

// Exports

export default config
