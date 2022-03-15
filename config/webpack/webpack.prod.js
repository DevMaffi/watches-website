// Modules

// path
import * as nodePath from 'path'

// plugins
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CopyPlugin from 'copy-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

// base utils
import { env, routes } from '../utils/utils.js'

// functions
import functions from './functions.js'

// Config

const {
  baseDirs: { confDir },
} = routes

const path = {
  confDir: nodePath.resolve(confDir),
}

const { applyHtmlPlugin } = functions

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
  output: { filename: '[contenthash].js' },
  plugins: [
    ...(env.isWp
      ? [
          new CopyPlugin({
            patterns: [
              {
                from: `${path.confDir}/wp/.prettierignore`,
              },
            ],
          }),
        ]
      : [new BundleAnalyzerPlugin()]),
    ...applyHtmlPlugin({
      minify: env.isProd,
      ext: env.isWp ? 'php' : 'html',
    }),
  ],
}

// Exports

export default config
