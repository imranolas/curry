A utility helper for function currying to Javascript.

```js
var curry = require('curry');

function add(x, y) {
	return x + y;
}

var curriedAdd = curry(add); // Returns a curried function.

var curriedAdd1 = curriedAdd(1); // Returns a function ready to accept another argument.
curriedAdd1Plus(2); // 3.

```
