<h1 align="center">
  <img src="https://cdn.jsdelivr.net/gh/gugutz/vanilla-commons@42d60b80ef7fef593c13055b4704f345ebacd46c/logo.svg" width="200" alt="vanilla-commons">
</h1>

<p align="center">Lightweight common vanilla utilities for the modern web development</p>

<p align="center"><a href="https://www.npmjs.com/package/vanilla-commons"><img src="https://img.shields.io/npm/v/vanilla-commons.svg" alt="npm"></a> <a href="https://travis-ci.com/gugutz/vanilla-commons"><img src="https://img.shields.io/travis/gugutz/vanilla-commons.svg" alt="Travis"></a> <a href="https://coveralls.io/github/gugutz/vanilla-commons?branch=master"><img src="https://img.shields.io/coveralls/gugutz/vanilla-commons.svg" alt="Coveralls"></a> <a href="https://david-dm.org/gugutz/vanilla-commons"><img src="https://img.shields.io/david/gugutz/vanilla-commons.svg" alt="David"></a> <a href="https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js"><img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/vanilla-commons/dist/vanilla-commons.umd.min.js?compression=gzip" alt="gzip size"></a></p>

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
- [Prior Art](#prior-art)
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
const format = '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}'

const finalDate = pipe(
  addMinutes(1),
  addHours(9),
  addDays(7),
  addMonths(-9),
  addYears(-2),
  formatDate(format)
)(date)
// '24/03/1993 12:25:00:00'
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
- `{ms}`: milliseconds; **10**

**Parameters**

- `format` **[string][string]** expected format of the date.
- `date` **[Date][Date]** to be compared.

**Returns**

**[string][string]** formatted date.

**Examples**

```javascript
import {formatDate} from 'vanilla-commons'

formatDate(
  '{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}',
  new Date('December 17, 1995 03:24:00')
)
// '17/12/1995 03:24:00:00'
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
- `{ms}`: milliseconds; **10**

**Parameters**

- `format` **[string][string]** expected format of the date.
- `dateStr` **[string][string]** date string to be tested.

**Returns**

**[Boolean][Boolean]** true if the date is valid.

**Examples**

```javascript
import {isValidDate} from 'vanilla-commons'

isValidDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}', '17/12/1995 03:24:00:00')
// true

isValidDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}', '29/02/1995 03:24:00:00')
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
- `{ms}`: milliseconds; **10**

**Parameters**

- `format` **[string][string]** the format of the date string.
- `dateStr` **[string][string]** date string to be parsed.

**Returns**

**[Date][Date]** parsed date.

**Examples**

```javascript
import {parseDate} from 'vanilla-commons'

parseDate('{DD}/{MM}/{YYYY} {HH}:{mm}:{ss}:{ms}', '17/12/1995 03:24:00:00')
// Sun, 17 Dec 1995 03:24:00
```
## Element Commons

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
// <div class="element hey"></div>

addClass(['there', 'man'], element)
// <div class="element hey there man"></div>
```

### clearEvents(element)

Remove all the event listeners of a element and its children.

**Parameters**

- `element` **[Element][Element]** Element that will have its events removed.

**Returns**

**[Element][Element]** element that the events were removed.

**Examples**

```javascript
// See the tests for better examples https://github.com/gugutz/vanilla-commons/blob/master/test/element/clear-events.test.js
import {clearEvents} from 'vanilla-commons'

const element = document.querySelector('.element')
clearEvents(element)
```

### createElement(selector?, props?, children?)

Create a DOM element.

**Parameters**

- `selector` **[string][string]** CSS selector like.
- `props` **[Object][Object]** Properties of the node.
- `children` (**[string][string]**|**[Element][Element]**|**[Array][Array]**) Children of the element.

**Returns**

**[Element][Element]** created.

**Examples**

```javascript
// See the tests for better examples https://github.com/gugutz/vanilla-commons/blob/master/test/element/create-element.test.js
import {createElement} from 'vanilla-commons'

createElement()
// <div></div>

createElement('input#id.class[type=text][required]')
// <input id="id" class="class" type="text" disabled required/>

createElement('div', {
  data: {
    ref: 'hey',
    error: 'bad'
  }
})
// <div data-ref="hey" data-error="bad"></div>

createElement('p', {
  className: 'hey there man'
})
// <p class="hey there man"></p>

createElement('p', {
  onclick: function() {
    console.log('clicked')
  }
})
// It's easy to work with events!

createElement('div', [
  createElement('input[type=text]'),
  'hey',
  createElement('img[src=coolimage.jpg]')
])
// <div>
//   <input type=""/>
//   hey
//   <img src="coolimage.jpg"/>
// </div>
```

### getParents(element)

Get all the parents of a given element.

**Parameters**

- `element` **[Element][Element]** Reference element.

**Returns**

**[Array][Array]** the parents of the element, including the body.

**Examples**

```javascript
// See the tests for better examples https://github.com/gugutz/vanilla-commons/blob/master/test/element/get-parents.test.js
import {getParents} from 'vanilla-commons'

const element = document.querySelector('.element')
getParents(element)
```

### hasClass(classToCheck, element)

Check if a DOM Element has the specified class.

**Parameters**

- `classToCheck` **([Array][Array] \| [string][string])** Array or string of class to check the existence in a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

**Returns**

**[Element][Element]** to check if has the specified class.

**Examples**

```javascript
import {hasClass} from 'vanilla-commons'

const element = document.createElement('div')
element.className = 'hey there'

hasClass('hey')(element)
// true

hasClass('hey', element)
// true

hasClass('man', element)
// false

hasClass(['hey', 'there'], element)
// true

hasClass(['hey', 'man'], element)
// false
```

### hideElement(elementToHide)

Hide a Element from the DOM.

**Parameters**

- `elementToHide` **([Array][Array] \| [Element][Element])** Array of elements or element to hide.

**Returns**

**([Array][Array] \| [Element][Element])** element or array of elements that were hidden.

**Examples**

```javascript
import {hideElement} from 'vanilla-commons'

const element = document.createElement('div')
element.style.display
// block

hideElement(element)
element.style.display
// none
```
```javascript
import {hideElement} from 'vanilla-commons'

const element1 = document.createElement('div')
element1.style.display
// block

const element2 = document.createElement('div')
element2.style.display
// block

hideElement([element1, element2])

element1.style.display
// none

element2.style.display
// none
```

### insertElementAfter(referenceElement, newElement)

Insert a element after a reference element.

**Parameters**

- `referenceElement` **[Element][Element]** Reference element.
- `newElement` **[Element][Element]** Element to be inserted.

**Returns**

**[Element][Element]** that were inserted.

**Examples**

```javascript
import {insertElementAfter} from 'vanilla-commons'

insertElementAfter(referenceElement, newElement)
```

### insertElementBefore(referenceElement, newElement)

Insert a element before a reference element.

**Parameters**

- `referenceElement` **[Element][Element]** Reference element.
- `newElement` **[Element][Element]** Element to be inserted.

**Returns**

**[Element][Element]** that were inserted.

**Examples**

```javascript
import {insertElementBefore} from 'vanilla-commons'

insertElementBefore(referenceElement, newElement)
```

### killElement(elementToKill)

Kill a Element from the DOM.

**Parameters**

- `elementToKill` **([Array][Array] \| [Element][Element])** Array of elements or element to kill.

**Examples**

```javascript
import {killElement} from 'vanilla-commons'

killElement(element)

killElement([element1, element2])
```

### removeClass(classToRemove, element)

Remove a class of a DOM Element.

**Parameters**

- `classToRemove` **([Array][Array] \| [string][string])** Array or string of class to remove of a DOM Element.
- `element` **[Element][Element]** Element to apply the changes.

**Returns**

**[Element][Element]** that the had the class removed.

**Examples**

```javascript
import {removeClass} from 'vanilla-commons'

removeClass('hey')(element)

removeClass('hey', element)

removeClass(['hey', 'there'], element)
```

### replaceElement(originalElement, newElement)

Replace a DOM element with another element.

**Parameters**

- `originalElement` **[Element][Element]** Element to be replaced.
- `newElement` **[Element][Element]** New element to replace the old one.

**Returns**

**[Element][Element]** element that replaced the old one.

**Examples**

```javascript
import {replaceElement} from 'vanilla-commons'

replaceElement(originalElement, newElement)
```

### showElement(elementToShow)

Show a hidden Element from the DOM.

**Parameters**

- `elementToShow` **([Array][Array] \| [Element][Element])** Array of elements or element to hide.

**Returns**

**([Array][Array] \| [Element][Element])** element or array of elements that were showed.

**Examples**

```javascript
import {showElement} from 'vanilla-commons'

showElement(element)

showElement([element1, element2])
```

### toggleClass(classToToggle, element)

Toggle a class from a DOM Element.

**Parameters**

- `classToToggle` **([Array][Array] \| [string][string])** Array or string of class to toggle a DOM Element.
- `element` **[Element][Element]**  to apply the changes.

**Returns**

**[Element][Element]** that the changes were made.

**Examples**

```javascript
import {toggleClass} from 'vanilla-commons'

toggleClass('hey')(element)

toggleClass('hey', element)

toggleClass(['hey', 'there'], element)
```

## Function Commons

### compose(fn[, fn1, ..., fnN])

Performs right-to-left function composition.

**Parameters**

- `fn`...`fnN` **[Function][Function]** functions to be composed.

**Returns**

- **[Function][Function]** composed function.

**Examples**

```javascript
import {curry, compose} from 'vanilla-commons'

const add = curry((a, b) => a + b)

const multiply = curry((a, b) => a * b)

const composedFunction = compose(add(5), multiply(4), add(3))
composedFunction(2)
// (((2 + 3) * 4) + 5) = 25
```

### curry(fn)

Returns a curried equivalent of the provided function

**Parameters**

- `fn` **[Function][Function]** function to be curried.

**Returns**

- **[Function][Function]** curried function.

**Examples**

```javascript
import {curry} from 'vanilla-commons'

const addFourNumbers = (a, b, c, d) => a + b + c + d

const curriedAddFourNumbers = curry(addFourNumbers)
curriedAddFourNumbers(1, 2)(3)(4)
// 10

curriedAddFourNumbers(1, 2)(3, 4)
// 10

curriedAddFourNumbers(1)(2)(3)(4)
// 10

curriedAddFourNumbers(1, 2, 3)(4)
// 10
```

### pipe(fn[, fn1, ..., fnN])

Performs left-to-right function composition.

**Parameters**

- `fn`...`fnN` **[Function][Function]** functions to be piped.

**Returns**

- **[Function][Function]** piped function.

**Examples**

```javascript
import {curry, pipe} from 'vanilla-commons'

const add = curry((a, b) => a + b)

const multiply = curry((a, b) => a * b)

const pipedFunction = pipe(add(5), multiply(4), add(3))
pipedFunction(2)
// (((2 + 5) * 4) + 3) = 31
```

### throttle(limit, fn)

Creates a function that will call fn at most once every wait milliseconds.

**Parameters**

- `limit` **[Number][Number]** time in milliseconds to wait.
- `fn` **[Function][Function]** function to be executed.

**Returns**

- **[Function][Function]** throttled function.

**Examples**

```javascript
import {throttle} from 'vanilla-commons'

window.addEventListener('scroll', throttle(100, e => {
  console.log(e)
}))
```

## Number Commons

### round(num)

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

mapValues(function(value) {
  return value + 'hey'
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

## Prior Art

Vanilla Commons is fully inspired by these projects:

- [Lodash](https://lodash.com/)
- [Underscore.js](http://underscorejs.org/)
- [Pareto.js](https://github.com/concretesolutions/pareto.js)
- [Ramda](http://ramdajs.com/)
- [tinydate](https://github.com/lukeed/tinydate)
- [date-fns](https://date-fns.org/)
- [Moment.js](https://momentjs.com/)
- [jQuery](http://jquery.com/)
- [dom-create-element-query-selector](https://github.com/hekigan/dom-create-element-query-selector)
- [hyperscript](https://github.com/hyperhype/hyperscript)

## Contributing

See the [contributing file](CONTRIBUTING.md).

## License

[MIT License](LICENSE.md) © [Gustavo P Borges](https://github.com/gugutz)

[Array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
[Boolean]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean
[Date]: https://developer.mozilla.org/en-US/docs/Web/API/Date
[Element]: https://developer.mozilla.org/en-US/docs/Web/API/Element
[Number]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
[string]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
[Function]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
[Object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
