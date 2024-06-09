/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

function arrayFirst<Content>(arr: ReadonlyArray<Content>, num?: number): Content | Content[] | null {
	if (!Array.isArray(arr)) {
		throw new Error('array-first expects an array as the first argument.');
	}

	if (arr.length === 0) {
		return null;
	}

	const first = arr.slice(0, num ?? 1);
	if ((num ?? 1) === 1) {
		return first[0];
	}
	return first;
};

export default arrayFirst;
