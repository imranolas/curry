/**
 * Curry module.
 * @module curry
 */

/**
 * Curryify a function.
 * The returned function will accept incremental arguments as sequential function invocations.
 * The function will execute once it's argument length has been fulfilled.
 * @method exports
 * @param  {Function} fn The function to be curried
 * @return {Function} A curryable function
 */
module.exports = function (fn) {
	return function() {
		var args = [];

		var checkArgsOrInvoke = function() {
			args = args.concat(Array.prototype.slice.call(arguments));
			console.log("checkArgsOrInvoke called with:", args);
			if (fn.length <= args.length) {
				return fn.apply(null, args);
			} else {
				return checkArgsOrInvoke;
			}
		};

		return checkArgsOrInvoke.apply(
			null,
			Array.prototype.slice.call(arguments)
		);
	};
};
