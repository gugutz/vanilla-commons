import {readFileSync} from 'fs'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import nodeResolve from 'rollup-plugin-node-resolve'
import multiEntry from 'rollup-plugin-multi-entry'

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {})

export default {
  entry: 'lib/*.js',
  external: dependencies,
  plugins: [
    multiEntry(),
    babel({
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [
        [
          'env',
          {
            modules: false
          }
        ],
        'stage-0'
      ]
    }),
    nodeResolve(),
    commonjs({
      include: 'node_modules/**'
    })
  ],
  targets: [
    {
      format: 'cjs',
      dest: 'dist/vanilla-commons.js'
    },
    {
      format: 'es',
      dest: 'dist/vanilla-commons.es.js'
    }
  ]
}
