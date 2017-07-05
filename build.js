const {readFileSync, writeFileSync} = require('fs')
const {rollup} = require('rollup')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const nodeResolve = require('rollup-plugin-node-resolve')
const filesize = require('rollup-plugin-filesize')
const uglify = require('uglify-js')
const fileSize = require('filesize')
const gzipSize = require('gzip-size')
const boxen = require('boxen')
const chalk = require('chalk')

const entry = 'lib/index.js'
const targets = {
  cjs: 'dist/vanilla-commons.js',
  es: 'dist/vanilla-commons.es.js',
  umd: 'dist/vanilla-commons.umd.js',
  min: 'dist/vanilla-commons.umd.min.js'
}

const pkg = JSON.parse(readFileSync('./package.json'))
const dependencies = Object.keys(pkg.dependencies || {})
const plugins = [
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

const logFileSize = (dest, sizes) => {
  const primaryColor = 'green'
  const secondaryColor = 'yellow'

  console.log(
    boxen(
      chalk[primaryColor].bold('Destination: ') +
        chalk[secondaryColor](dest) +
        '\n' +
        chalk[primaryColor].bold('Bundle size: ') +
        chalk[secondaryColor](sizes.normal) +
        ', ' +
        chalk[primaryColor].bold('Gzipped size: ') +
        chalk[secondaryColor](sizes.gzip),
      {padding: 1}
    )
  )
}

const mainBuild = rollup({
  entry,
  external: dependencies,
  plugins
}).then(bundle => {
  return Promise.all([
    bundle.write({
      dest: targets.cjs,
      format: 'cjs'
    }),
    bundle.write({
      dest: targets.es,
      format: 'es'
    })
  ])
})

const umdBuild = rollup({
  entry,
  plugins
}).then(bundle => {
  return bundle.write({
    dest: targets.umd,
    format: 'umd',
    moduleName: 'commons'
  })
})

Promise.all([mainBuild, umdBuild])
  .then(() => {
    const umdBundle = readFileSync(targets.umd, 'utf-8')
    const result = uglify.minify(umdBundle)

    if (result.error) {
      throw result.error
    }

    writeFileSync(targets.min, result.code, 'utf-8')
    logFileSize(targets.min, {
      normal: fileSize(Buffer.byteLength(result.code)),
      gzip: fileSize(gzipSize.sync(result.code))
    })
  })
  .catch(console.error)
