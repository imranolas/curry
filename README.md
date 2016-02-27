A utility helper for function currying in Javascript.

This was mostly just an exercise in implementing currying and wrapping my head around functional idioms using Javascript. If you do find this stuff interesting I'd recommend checking out the capable libraries available that implement these features fully.

[Ramda.js] (https://github.com/ramda/ramda)
[lodash/fp] (https://github.com/lodash/lodash)

Use at your own risk ;)

```js
var curry = require('curry');

function add(x, y) {
  return x + y;
}

var curriedAdd = curry(add); // Returns a curried function.

var curriedAdd1 = curriedAdd(1); // Returns a function ready to accept another argument.
curriedAdd1Plus(2); // 3.

```
