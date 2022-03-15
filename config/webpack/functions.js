// Modules

// plugins
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

// base utils
import { routes } from '../utils/utils.js'

// Functions

const { pages } = routes

const applyHtmlPlugin = ({ minify = false, ext = 'html' } = {}) =>
  pages.map(
    page =>
      new HtmlWebpackPlugin({
        chunks: [page],
        filename: `${page}.${ext}`,
        minify,
        template: `./gulp/pages/${page}.html`,
      })
  )

const cssLoaders = extra => {
  let loaders = [MiniCssExtractPlugin.loader, 'css-loader']

  if (extra) loaders = [...loaders, extra]

  return loaders
}

// Exports

export default { applyHtmlPlugin, cssLoaders }
