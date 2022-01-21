import resolve from 'rollup-plugin-node-resolve' 
import vue from 'rollup-plugin-vue'
import commonjs from 'rollup-plugin-commonjs' 
import babel from 'rollup-plugin-babel'
import buble from 'rollup-plugin-buble'
import { terser } from 'rollup-plugin-terser'
import packageJSON from './package.json'


const commonConf = {
  input: './src/index.js',
  external: ['vue'],
  plugins: [
    resolve(['.js', '.vue']),
    vue(),
    babel({
      exclude: '**/node_modules/**',
    }),
    commonjs(),
    buble(),
    terser(),
  ],
  output: [
    {
      file: packageJSON.main,
      format: 'umd',
      name: 'mathJaxVue',
    },
    {
      file: packageJSON.module,
      format: 'es',
      name: 'mathJaxVue',
    },
    {
      file: packageJSON.browser,
      format: 'iife',
      name: 'mathJaxVue',
    },
  ],
}

export default commonConf
