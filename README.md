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

- [addClass](#addclass)
- [addDays](#adddays)
- [addHours](#addhours)
- [addMilliseconds](#addMilliseconds)
- [addMinutes](#addminutes)
- [addMonths](#addmonths)
- [addSeconds](#addseconds)
- [addWeeks](#addweeks)
- [addYears](#addyears)
- [capitalize](#capitalize)
- [cleanUpString](#cleanupstring)
- [clearEvents](#clearevents)
- [compose](#compose)
- [curry](#curry)
- [diffDate](#diffdate)
- [flattenArray](#flattenarray)
- [formatDate](#formatdate)
- [getParents](#getparents)
- [hasClass](#hasClass)
- [hideElement](#hideelement)
- [insertElementAfter](#insertelementafter)
- [insertElementBefore](#insertelementbefore)
- [isValidDate](#isvaliddate)
- [killElement](#killelement)
- [mapKeys](#mapkeys)
- [mapValues](#mapvalues)
- [parseDate](#parseDate)
- [pipe](#pipe)
- [removeClass](#removeClass)
- [replaceElement](#replaceelement)
- [round](#round)
- [showElement](#showelement)
- [throttle](#throttle)
- [toggleClass](#toggleclass)

### addClass

Add a class to a DOM Element.

**Parameters**

-   `newClass` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Array or string of class to add to a DOM Element.
-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to apply the changes.

**Examples**

```javascript
import {addClass} from 'vanilla-commons'

const element = document.querySelector('.element')
addClass('hey')(element)
```

```javascript
import {addClass} from 'vanilla-commons'

const element = document.querySelector('.element')
addClass('hey', element)
```

```javascript
import {addClass} from 'vanilla-commons'

const element = document.querySelector('.element')
addClass(['hey', 'there'], element)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that the changes were made.

### addDays

Add days to a Date.

**Parameters**

-   `days` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of days to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addDays} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addDays(6, date)
```

```javascript
import {addDays} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addDays(-6, date)
```

```javascript
import {addDays} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addDays(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the days added.

### addHours

Add hours to a Date.

**Parameters**

-   `hours` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of hours to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addHours} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addHours(6, date)
```

```javascript
import {addHours} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addHours(-6, date)
```

```javascript
import {addHours} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addHours(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the hours added.

### addMilliseconds

Add milliseconds to a Date.

**Parameters**

-   `milliseconds` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of milliseconds to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addMilliseconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMilliseconds(6, date)
```

```javascript
import {addMilliseconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMilliseconds(-6, date)
```

```javascript
import {addMilliseconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMilliseconds(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the milliseconds added.

### addMinutes

Add minutes to a Date.

**Parameters**

-   `minutes` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of minutes to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addMinutes} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMinutes(6, date)
```

```javascript
import {addMinutes} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMinutes(-6, date)
```

```javascript
import {addMinutes} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMinutes(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the minutes added.

### addMonths

Add months to a Date.

**Parameters**

-   `months` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of months to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addMonths} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMonths(6, date)
```

```javascript
import {addMonths} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMonths(-6, date)
```

```javascript
import {addMonths} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addMonths(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the months added.

### addSeconds

Add seconds to a Date.

**Parameters**

-   `seconds` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of seconds to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addSeconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addSeconds(6, date)
```

```javascript
import {addSeconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addSeconds(-6, date)
```

```javascript
import {addSeconds} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addSeconds(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the seconds added.

### addWeeks

Add weeks to a Date.

**Parameters**

-   `weeks` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of weeks to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addWeeks} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addWeeks(6, date)
```

```javascript
import {addWeeks} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addWeeks(-6, date)
```

```javascript
import {addWeeks} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addWeeks(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the weeks added.

### addYears

Add years to a Date.

**Parameters**

-   `years` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Number of years to add.
-   `element` **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Date)** Date to be modified.

**Examples**

```javascript
import {addYears} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addYears(6, date)
```

```javascript
import {addYears} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addYears(-6, date)
```

```javascript
import {addYears} from 'vanilla-commons'

const date = new Date('December 17, 1995 03:24:00')
const finalDate = addYears(6)(date)
```

Returns a **[Date](https://developer.mozilla.org/en-US/docs/Web/API/Element)** with the years added.

### capitalize

Converts the first character of string to upper case and the remaining to lower case.

### cleanUpString

### clearEvents

Remove all the event listeners of a element and its children.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element that will have its events removed.

**Examples**

```javascript
clearEvents(element)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that the events were removed.

### compose
### curry
### diffDate

### flattenArray

Flatten nested arrays.

**Parameters**

- `arr` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Nested array.

**Examples**

```javascript
// returns [1, 2, 3, 4]
flattenArray([[1], [2, [3, 4]]])
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** flattened.

### formatDate

### getParents

Get all the parents of a given element.

**Parameters**

-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Reference element.

**Examples**

```javascript
getParents(element)
```

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** the parents of teh element, including the body.

### hasClass

Check if a DOM Element has the specified class.

**Parameters**

-   `classToCheck` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Array or string of class to check the existence in a DOM Element.
-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to apply the changes.

**Examples**

```javascript
hasClass('hey')(element)
```

```javascript
hasClass('hey', element)
```

```javascript
hasClass(['hey', 'there'], element)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that the changes were made.

### hideElement

Hide a Element from the DOM.

**Parameters**

-   `elementsToHide` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** Array of elements or element to hide.

**Examples**

```javascript
hideElement(element)
```

```javascript
hideElement([element1, element2])
```

Returns **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** element or array of elements that were hidden.

### insertElementAfter

Insert a element after a reference element.

**Parameters**

-   `referenceElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Reference element.
-   `newElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to be inserted.

**Examples**

```javascript
insertElementAfter(referenceElement, newElement)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that were inserted.

### insertElementBefore

Insert a element before a reference element.

**Parameters**

-   `referenceElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Reference element.
-   `newElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to be inserted.

**Examples**

```javascript
insertElementBefore(referenceElement, newElement)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that were inserted.

### isValidDate

### killElement

Kill a Element from the DOM.

**Parameters**

-   `elementsToKill` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** Array of elements or element to kill.

**Examples**

```javascript
killElement(element)
```

```javascript
killElement([element1, element2])
```

### mapKeys
### mapValues
### parseDate
### pipe

### removeClass

Remove a class of a DOM Element.

**Parameters**

-   `classToRemove` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Array or string of class to remove of a DOM Element.
-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to apply the changes.

**Examples**

```javascript
removeClass('hey')(element)
```

```javascript
removeClass('hey', element)
```

```javascript
removeClass(['hey', 'there'], element)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that the changes were made.

### replaceElement

Replace a DOM element with another element.

**Parameters**

-   `originalElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to be replaced.
-   `newElement` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** New element to replace the old one.

**Examples**

```javascript
replaceElement(originalElement, newElement)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that replaced the old one.

### round

### showElement

Show a hidden Element from the DOM.

**Parameters**

-   `elementsToShow` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** Array of elements or element to hide.

**Examples**

```javascript
showElement(element)
```

```javascript
showElement([element1, element2])
```

Returns **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element))** element or array of elements that were showed.

### throttle

### toggleClass

Toggle a class from a DOM Element.

**Parameters**

-   `classToToggle` **([Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) \| [string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))** Array or string of class to toggle a DOM Element.
-   `element` **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** Element to apply the changes.

**Examples**

```javascript
toggleClass('hey')(element)
```

```javascript
toggleClass('hey', element)
```

```javascript
toggleClass(['hey', 'there'], element)
```

Returns **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)** element that the changes were made.

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Thiago Santos](https://thiamsantos.github.io/)
