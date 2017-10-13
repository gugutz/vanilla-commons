const {promisify} = require('util')
const fs = require('fs')
const {rollup} = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const filesize = require('rollup-plugin-filesize')
const uglify = require('rollup-plugin-uglify')

const readFile = promisify(fs.readFile)

const targets = {
  cjs: 'dist/vanilla-commons.js',
  es: 'dist/vanilla-commons.es.js',
  umd: 'dist/vanilla-commons.umd.js',
  min: 'dist/vanilla-commons.umd.min.js'
}

async function getDependencies() {
  const pkg = JSON.parse(await readFile('./package.json'))
  return Object.keys(pkg.dependencies || {})
}

async function generateBundle(format) {
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

  const plugins =
    format === 'min' ? defaultPlugins.concat(uglify()) : defaultPlugins

  const basicConfig = {
    entry: 'lib/index.js',
    plugins
  }

  const customConfig = ['cjs', 'es'].includes(format) ?
    {external: await getDependencies()} :
    {}

  return rollup(Object.assign(basicConfig, customConfig))
}

function writeBundle(bundle, format) {
  return bundle.write({
    dest: targets[format],
    format: format === 'min' ? 'umd' : format,
    moduleName: 'commons'
  })
}

async function buildGeneral() {
  const bundle = await generateBundle('es')

  return Promise.all([
    await writeBundle(bundle, 'es'),
    await writeBundle(bundle, 'cjs')
  ])
}

async function buildUmd() {
  const bundle = await generateBundle('umd')
  return writeBundle(bundle, 'umd')
}

async function buildMin() {
  const bundle = await generateBundle('min')
  return writeBundle(bundle, 'min')
}

async function run() {
  try {
    Promise.all([buildGeneral(), buildUmd(), buildMin()])
  } catch (err) {
    console.error(err)
  }
}

run()
