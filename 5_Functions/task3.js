function FindLongestString(arr) {
	let longest = "";

	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			const nestedLongest = FindLongestString(arr[i]);

			if (nestedLongest.length > longest.length) {
				longest = nestedLongest;
			}
		} else if (typeof arr[i] === "string") {
			if (arr[i].length > longest.length) {
				longest = arr[i];
			}
		}
	}

	return longest;
}

console.log(FindLongestString(['apple', 'strawberry', ['banana', 'mandarin'], 'grape', ['orange', 'pear']]));

// Код выведет strawberry, потому что это самое длинное слово из преддложенных в массиве.
// ответ 4 из предложенных вариантов