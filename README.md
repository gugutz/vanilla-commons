<h1 align="center">
  <img src="https://cdn.rawgit.com/thiamsantos/vanilla-commons/a4852858/logo.svg" width="200" alt="vanilla-commons">
</h1>

<p align="center">Lightweight common vanilla utilities for the modern web development</p>

<p align="center"><a href="https://www.npmjs.com/package/vanilla-commons"><img src="https://img.shields.io/npm/v/vanilla-commons.svg" alt="npm"></a> <a href="https://travis-ci.org/thiamsantos/vanilla-commons"><img src="https://img.shields.io/travis/thiamsantos/vanilla-commons.svg" alt="Travis"></a> <a href="https://coveralls.io/github/thiamsantos/vanilla-commons?branch=master"><img src="https://img.shields.io/coveralls/thiamsantos/vanilla-commons.svg" alt="Coveralls"></a> <a href="https://david-dm.org/thiamsantos/vanilla-commons"><img src="https://img.shields.io/david/thiamsantos/vanilla-commons.svg" alt="David"></a> <a href="https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js"><img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js?compression=gzip" alt="gzip size"></a></p>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Array Commons](#array-commons)
- [Date Commons](#date-commons)
- [Element Commons](#element-commons)
- [Function Commons](#function-commons)
- [Number Commons](#number-commons)
- [Object Commons](#object-commons)
- [String Commons](#string-commons)
- [Contributing](#contributing)
- [License](#license)

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

You can find the library on `window.commons`.

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

## Array Commons

### flattenArray(arr)

Flatten nested arrays.

**Parameters**

- `arr` **[Array][Array]** Nested array.

**Returns**

**[Array][Array]** flattened.

**Examples**

```javascript
import {flattenArray} from 'vanilla-commons'

flattenArray([[1], [2, [3, 4]]])
// [1, 2, 3, 4]
```

## Date Commons

### addDays(days, date)

Add days to a Date.

**Parameters**

- `days` **[Number][Number]** of days to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the days added.

**Examples**

```javascript
import {addDays} from 'vanilla-commons'

addDays(6, new Date('December 17, 1995 03:24:00'))
// Sat, 23 Dec 1995 03:24:00

addDays(-6, new Date('December 17, 1995 03:24:00'))
// Mon, 11 Dec 1995 03:24:00

addDays(6)(new Date('December 17, 1995 03:24:00'))
// Sat, 23 Dec 1995 03:24:00
```

### addHours(hours, date)

Add hours to a Date.

**Parameters**

- `hours` **[Number][Number]** of hours to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the hours added.

**Examples**

```javascript
import {addHours} from 'vanilla-commons'

addHours(6, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:00

addHours(-6, new Date('December 17, 1995 03:24:00'))
// Fri, 16 Dec 1995 21:24:00

addHours(6)(new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:00
```

### addMilliseconds(milliseconds, date)

Add milliseconds to a Date.

**Parameters**

- `milliseconds` **[Number][Number]** Number of milliseconds to add.
- `date` **[Date][Date]** Date to be modified.

**Returns**

**[Date][Date]** with the milliseconds added.

**Examples**

```javascript
import {addMilliseconds} from 'vanilla-commons'

addMilliseconds(1000, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:01

addMilliseconds(-1000, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:23:59

addMilliseconds(1000)(new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:01
```

### addMinutes(minutes, date)

Add minutes to a Date.

**Parameters**

- `minutes` **[Number][Number]** of minutes to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the minutes added.

**Examples**

```javascript
import {addMinutes} from 'vanilla-commons'

addMinutes(6, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:06

addMinutes(-6, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:23:54

addMinutes(6)(new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:24:06
```

### addMonths(months, date)

Add months to a Date.

**Parameters**

- `months` **[Number][Number]** of months to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the months added.

**Examples**

```javascript
import {addMonths} from 'vanilla-commons'

addMonths(6, new Date('December 17, 1995 03:24:00'))
// Mon, 17 Jun 1996 09:24:00

addMonths(-6, new Date('December 17, 1995 03:24:00'))
// Sat, 17 Jun 1995 09:24:00

addMonths(6)(new Date('December 17, 1995 03:24:00'))
// Mon, 17 Jun 1996 09:24:00
```

### addSeconds(seconds, date)

Add seconds to a Date.

**Parameters**

- `seconds` **[Number][Number]** of seconds to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the seconds added.

**Examples**

```javascript
import {addSeconds} from 'vanilla-commons'

addSeconds(6, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:30:00

addSeconds(-6, new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:18:00

addSeconds(6)(new Date('December 17, 1995 03:24:00'))
// Sun, 17 Dec 1995 09:30:00
```

### addWeeks(weeks, date)

Add weeks to a Date.

**Parameters**

- `weeks` **[Number][Number]** of weeks to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the weeks added.

**Examples**

```javascript
import {addWeeks} from 'vanilla-commons'

addWeeks(1, new Date('December 17, 1995 03:24:00'))
// Sun, 24 Dec 1995 09:24:00

addWeeks(-1, new Date('December 17, 1995 03:24:00'))
// Sun, 10 Dec 1995 09:24:00

addWeeks(6)(new Date('December 17, 1995 03:24:00'))
// Sun, 24 Dec 1995 09:24:00
```

### addYears(years, date)

Add years to a Date.

**Parameters**

- `years` **[Number][Number]** of years to add.
- `date` **[Date][Date]** to be modified.

**Returns**

**[Date][Date]** with the years added.

**Examples**

```javascript
import {addYears} from 'vanilla-commons'

addYears(1, new Date('December 17, 1995 03:24:00'))
// Tue, 17 Dec 1996 09:24:00

addYears(-1, new Date('December 17, 1995 03:24:00'))
// Sat, 17 Dec 1994 09:24:00

addYears(1)(new Date('December 17, 1995 03:24:00'))
// Tue, 17 Dec 1996 09:24:00
```

### diffDate(firstDate, secondDate)

Calculate the diff of two Date objects.

**Parameters**

- `firstDate` **[Date][Date]** to be compared.
- `secondDate` **[Date][Date]** to be compared.

**Returns**

**[Date][Date]** with the years added.

**Examples**

```javascript
import {diffDate} from 'vanilla-commons'

diffDate(
  new Date('December 17, 1995 03:24:00'),
  new Date('December 17, 1996 03:25:00')
)
// {
//   milliseconds: 31622460000,
//   seconds: 31622460,
//   minutes: 527041,
//   hours: 8784.02,
//   days: 366,
//   weeks: 52.29,
//   months: 12.2,
//   years: 1
// }
```

### formatDate(format, date)

Format a date given a expected format.
Use the following patterns inside your format:

- `{YYYY}`: full year; **2017**
- `{YY}`: short year; **17**
- `{MM}`: month; **04**
- `{DD}`: day; **01**
- `{HH}`: hours; **06** (24h)
- `{mm}`: minutes; **59**
- `{ss}`: seconds; **09**

**Parameters**

- `format` **[string][string]** expected format of the date.
- `date` **[Date][Date]** to be compared.

**Returns**

**[string][string]** formatted date.

**Examples**

```javascript
import {formatDate} from 'vanilla-commons'

formatDate(
  '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}',
  new Date('December 17, 1995 03:24:00')
)
// '17/12/1995 03:24:00'
```

### isValidDate(format, dateStr)

Checks the validity of a given date string.
Use the following patterns inside your format:

- `{YYYY}`: full year; **2017**
- `{YY}`: short year; **17**
- `{MM}`: month; **04**
- `{DD}`: day; **01**
- `{HH}`: hours; **06** (24h)
- `{mm}`: minutes; **59**
- `{ss}`: seconds; **09**

**Parameters**

- `format` **[string][string]** expected format of the date.
- `dateStr` **[string][string]** date string to be tested.

**Returns**

**[Boolean][Boolean]** true if the date is valid.

**Examples**

```javascript
import {isValidDate} from 'vanilla-commons'

isValidDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}', '17/12/1995 03:24:00')
// true

isValidDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}', '29/02/1995 03:24:00')
// false
```

### parseDate(format, dateStr)

Parse a date string to a date object given a format.
Use the following patterns inside your format:

- `{YYYY}`: full year; **2017**
- `{YY}`: short year; **17**
- `{MM}`: month; **04**
- `{DD}`: day; **01**
- `{HH}`: hours; **06** (24h)
- `{mm}`: minutes; **59**
- `{ss}`: seconds; **09**

**Parameters**

- `format` **[string][string]** the format of the date string.
- `dateStr` **[string][string]** date string to be parsed.

**Returns**

**[Date][Date]** parsed date.

**Examples**

```javascript
import {parseDate} from 'vanilla-commons'

parseDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}', '17/12/1995 03:24:00')
// Sun, 17 Dec 1995 03:24:00
```

## Function Commons
## Number Commons

## round(num)

Round a number to two decimal places.

**Parameters**

- `num` **[Number][Number]** number to be rounded.

**Returns**

**[Number][Number]** rounded number.

**Examples**

```javascript
import {round} from 'vanilla-commons'

round(3.141592)
// 3.14

round(-27.817987)
// -27.82
```

## Object Commons

### mapKeys(fn, obj)

Map over the keys of a object.

**Parameters**

- `fn` **[Function][Function]** function that will be invoked per iteration.
- `obj` **[Object][Object]** object to be mapped.

**Returns**

**[Object][Object]** mapped object.

**Examples**

```javascript
import {mapKeys} from 'vanilla-commons'

mapKeys(function(key) {
  return key + 'hey'
}, {
  captain: 'picard',
  firstOfficer: 'riker'
})
// {
//   captainhey: 'picard',
//   firstOfficerhey: 'riker'
// }
```

### mapValues(fn, obj)

Map over the values of a object.

**Parameters**

- `fn` **[Function][Function]** function that will be invoked per iteration.
- `obj` **[Object][Object]** object to be mapped.

**Returns**

**[Object][Object]** mapped object.

**Examples**

```javascript
import {mapValues} from 'vanilla-commons'

mapValues(function(key) {
  return key + 'hey'
}, {
  captain: 'picard',
  firstOfficer: 'riker'
})
// {
//   captain: 'picardhey',
//   firstOfficer: 'rikerhey'
// }
```

## String Commons

### capitalize(str)

Converts the first character of string to upper case.

**Parameters**

- `str` **[string][string]** string to be capitalized.

**Returns**

**[string][string]** capitalized string.

**Examples**

```javascript
import {capitalize} from 'vanilla-commons'

capitalize('vanilla')
// Vanilla
```

### cleanUpString(str)

Removes the all line breaks in the entire string and also the white spaces from the both ends of the string.

**Parameters**

- `str` **[string][string]** string to be cleaned.

**Returns**

**[string][string]** clean string.

**Examples**

```javascript
import {cleanUpString} from 'vanilla-commons'

cleanUpString('\n \n\r \r\n')
// ''

cleanUpString('\n \n\r hjhj ')
// 'hjhj'
```
<!-- ## API

### addClass(newClass, element)

Add a class to a DOM Element.

**Parameters**

- `newClass` **([Array][Array] \| [string][string])** Array or string of class to add to a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

**Returns**

**[Element][Element]** in which the changes were made.

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

### capitalize



### cleanUpString

### clearEvents

Remove all the event listeners of a element and its children.

**Parameters**

- `element` **[Element][Element]** Element that will have its events removed.

**Examples**

```javascript
clearEvents(element)
```

Returns **[Element][Element]** element that the events were removed.

### compose
### curry

### getParents

Get all the parents of a given element.

**Parameters**

- `element` **[Element][Element]** Reference element.

**Examples**

```javascript
getParents(element)
```

Returns **[Array][Array]** the parents of teh element, including the body.

### hasClass

Check if a DOM Element has the specified class.

**Parameters**

- `classToCheck` **([Array][Array] \| [string][string])** Array or string of class to check the existence in a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

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

Returns **[Element][Element]** element that the changes were made.

### hideElement

Hide a Element from the DOM.

**Parameters**

- `elementsToHide` **([Array][Array] \| [Element][Element])** Array of elements or element to hide.

**Examples**

```javascript
hideElement(element)
```

```javascript
hideElement([element1, element2])
```

Returns **([Array][Array] \| [Element][Element])** element or array of elements that were hidden.

### insertElementAfter

Insert a element after a reference element.

**Parameters**

- `referenceElement` **[Element][Element]** Reference element.
- `newElement` **[Element][Element]** Element to be inserted.

**Examples**

```javascript
insertElementAfter(referenceElement, newElement)
```

Returns **[Element][Element]** element that were inserted.

### insertElementBefore

Insert a element before a reference element.

**Parameters**

- `referenceElement` **[Element][Element]** Reference element.
- `newElement` **[Element][Element]** Element to be inserted.

**Examples**

```javascript
insertElementBefore(referenceElement, newElement)
```

Returns **[Element][Element]** element that were inserted.

### killElement

Kill a Element from the DOM.

**Parameters**

- `elementsToKill` **([Array][Array] \| [Element][Element])** Array of elements or element to kill.

**Examples**

```javascript
killElement(element)
```

```javascript
killElement([element1, element2])
```

### mapKeys
### mapValues

### pipe

### removeClass

Remove a class of a DOM Element.

**Parameters**

- `classToRemove` **([Array][Array] \| [string][string])** Array or string of class to remove of a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

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

Returns **[Element][Element]** element that the changes were made.

### replaceElement

Replace a DOM element with another element.

**Parameters**

- `originalElement` **[Element][Element]** Element to be replaced.
- `newElement` **[Element][Element]** New element to replace the old one.

**Examples**

```javascript
replaceElement(originalElement, newElement)
```

Returns **[Element][Element]** element that replaced the old one.

### round

### showElement

Show a hidden Element from the DOM.

**Parameters**

- `elementsToShow` **([Array][Array] \| [Element][Element])** Array of elements or element to hide.

**Examples**

```javascript
showElement(element)
```

```javascript
showElement([element1, element2])
```

Returns **([Array][Array] \| [Element][Element])** element or array of elements that were showed.

### throttle

### toggleClass

Toggle a class from a DOM Element.

**Parameters**

- `classToToggle` **([Array][Array] \| [string][string])** Array or string of class to toggle a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

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

Returns **[Element][Element]** element that the changes were made. -->

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Thiago Santos](https://thiamsantos.github.io/)

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Date]: https://developer.mozilla.org/en-US/docs/Web/API/Date
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
