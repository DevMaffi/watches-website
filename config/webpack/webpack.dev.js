// Modules

import EslintPlugin from 'eslint-webpack-plugin'

// Config

const config = {
  mode: 'development',
  devtool: 'source-map',
  output: { filename: '[name].js' },
  plugins: [new EslintPlugin()],
}

// Exports

export default config
