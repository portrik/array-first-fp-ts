/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014-2016 Jon Schlinkert.
 * Licensed under the MIT License
 */

import first from './index';

describe('first', function() {
	it('should throw an error if the value passed is not an array:', () => {
		expect(first).toThrowError('array-first expects an array as the first argument.');
	});

	it('should return the first element in the array:', () => {
		expect(first(['a', 'b', 'c', 'd', 'e', 'f'])).toBe('a');
		expect(first(['a', 'b', 'c', 'd', 'e', 'f'], 1)).toBe('a');
	});

	it('should the first n elements of the array:', () => {
		expect(first(['a', 'b', 'c', 'd', 'e', 'f'], 3)).toEqual(['a', 'b', 'c']);
	});
});

