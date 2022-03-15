// Modules

// plugins
import EslintPlugin from 'eslint-webpack-plugin'

// functions
import functions from './functions.js'

// Config

const { applyHtmlPlugin } = functions

const config = {
  mode: 'development',
  devtool: 'source-map',
  output: { filename: '[name].js' },
  plugins: [new EslintPlugin(), ...applyHtmlPlugin()],
}

// Exports

export default config
