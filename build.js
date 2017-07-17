const {readFileSync} = require('fs')
const {rollup} = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const filesize = require('rollup-plugin-filesize')
const uglify = require('rollup-plugin-uglify')

const entry = 'lib/index.js'
const targets = {
  cjs: 'dist/vanilla-commons.js',
  es: 'dist/vanilla-commons.es.js',
  umd: 'dist/vanilla-commons.umd.js',
  min: 'dist/vanilla-commons.umd.min.js'
}

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {})

const defaultPlugins = [
  nodeResolve(),
  commonjs({
    include: 'node_modules/**'
  }),
  babel({
    babelrc: false,
    presets: [
      [
        'env',
        {
          modules: false
        }
      ],
      'stage-0'
    ],
    plugins: ['external-helpers']
  }),
  filesize()
]

async function build(format) {
  const plugins =
    format === 'min' ? defaultPlugins.concat(uglify()) : defaultPlugins

  const basicConfig = {
    entry,
    plugins
  }

  const customConfig = ['cjs', 'es'].includes(format) ?
    {external: dependencies} :
    {}

  const bundle = await rollup(Object.assign(basicConfig, customConfig))

  return bundle.write({
    dest: targets[format],
    format: format === 'min' ? 'umd' : format,
    moduleName: 'commons'
  })
}

async function run() {
  try {
    await Promise.all(Object.keys(targets).map(build))
  } catch (err) {
    console.error(err)
  }
}

run()
