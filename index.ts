/*!
 * array-first <https://github.com/jonschlinkert/array-first>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

import { Option, none, some } from 'fp-ts/Option';

function arrayFirst<Content>(array: ReadonlyArray<Content>): Option<Content>;
function arrayFirst<Content>(array: ReadonlyArray<Content>, size: 1): Option<Content>;
function arrayFirst<Content>(array: ReadonlyArray<Content>, size: number): Option<Content[]>;

function arrayFirst<Content>(array: ReadonlyArray<Content>, size: number = 1): Option<Content | Content[]> {
	const first = array.slice(0, size);
	if (first.length === 0 || size < 1) {
		return none;
	}

	// Non-null assertion is guaranteed to be non-issue by the argument above.
	return some(size === 1 ? first[0]! : first);
};

export default arrayFirst;
