import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const pkg = require('./package.json')

export default {
  input: 'src/index.js',
  name: 'redux-helpers-cgen',
  plugins: [commonjs(), resolve()],
  output: [{file: pkg.main, format: 'umd'}, {file: pkg.module, format: 'es'}],
}
