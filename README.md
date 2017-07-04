<h1 align="center">
  <img src="https://cdn.rawgit.com/thiamsantos/vanilla-commons/a4852858/logo.svg" width="200" alt="vanilla-commons">
</h1>

<p align="center">Lightweight common vanilla utilities for the modern web development</p>

<p align="center"><a href="https://www.npmjs.com/package/vanilla-commons"><img src="https://img.shields.io/npm/v/vanilla-commons.svg" alt="npm"></a> <a href="https://travis-ci.org/thiamsantos/vanilla-commons"><img src="https://img.shields.io/travis/thiamsantos/vanilla-commons.svg" alt="Travis"></a> <a href="https://coveralls.io/github/thiamsantos/vanilla-commons?branch=master"><img src="https://img.shields.io/coveralls/thiamsantos/vanilla-commons.svg" alt="Coveralls"></a> <a href="https://david-dm.org/thiamsantos/vanilla-commons"><img src="https://img.shields.io/david/thiamsantos/vanilla-commons.svg" alt="David"></a> <a href="https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js"><img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js?compression=gzip" alt="gzip size"></a></p>

## Table of Contents

-   [Install](#install)
-   [Usage](#usage)
-   [API](#api)
-   [Contributing](#contributing)
-   [License](#license)

## Install

This project uses [node](http://nodejs.org) and [npm](https://npmjs.com).
Go check them out if you don't have them locally installed.

```sh
$ npm install --save vanilla-commons
```

The [UMD](https://github.com/umdjs/umd) build is also available on [jsdelivr](https://www.jsdelivr.com/):

```html
<script src="https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js"></script>
```

You can find the library on `window.vanillaCommons`.

## Usage

```js
import {
  addMinutes,
  addHours,
  addDays,
  addMonths,
  addYears,
  formatDate,
  pipe
} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}'

const finalDate = pipe(
  addMinutes(1),
  addHours(9),
  addDays(7),
  addMonths(-9),
  addYears(-2),
  formatDate(format)
)(date)
// '24/03/1993 12:25:00'
```

## API


## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Thiago Santos](https://thiamsantos.github.io/)
