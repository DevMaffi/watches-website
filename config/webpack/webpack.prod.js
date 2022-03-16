// Modules

// plugins
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import TerserPlugin from 'terser-webpack-plugin'

// base utils
import { env } from '../utils/utils.js'

// functions
import functions from './functions.js'

// Config

const { getPath, applyHtmlPlugin, assetModuleFilename } = functions

const path = getPath()
const wpContentDir = `${path.confDir}/wp-content`

const config = {
  mode: 'production',
  optimization: {
    minimizer: [
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
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: { comments: false },
        },
      }),
    ],
  },
  output: {
    filename: env.isWp ? 'assets/js/[contenthash].js' : '[contenthash].js',
    ...(env.isWp ? { assetModuleFilename } : {}),
  },
  plugins: [
    ...(env.isWp
      ? [
          new CopyPlugin({
            patterns: [
              {
                from: `${wpContentDir}/.prettierignore`,
              },
              {
                context: `${wpContentDir}`,
                from: `*.php`,
              },
            ],
          }),
        ]
      : [new BundleAnalyzerPlugin()]),
    new MiniCssExtractPlugin({
      filename: env.isWp ? 'style.css' : '[contenthash].css',
    }),
    ...applyHtmlPlugin({
      minify: env.isProd,
      ext: env.isWp ? 'php' : 'html',
    }),
  ],
}

// Exports

export default config
