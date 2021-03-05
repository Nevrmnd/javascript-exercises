const caesar = function (word, num) {
	const arr = [];
	for (let i = 0; i < word.length; i++) {
		arr.push(word.charCodeAt(i));
	}
	const shifted = arr.map((x) => {
		if (x >= 97 && x <= 122) {
			//if num is positive; (26 + num % 26) will be equal to num
			// if num is negative; (26 + num % 26) will be the same as subtracting num from 26
			const shift = (x - 97 + (26 + (num % 26))) % 26;
			return String.fromCharCode(shift + 97);
		} else if (x >= 65 && x <= 90) {
			const shift = (x - 65 + (26 + (num % 26))) % 26;
			return String.fromCharCode(shift + 65);
		} else {
			return String.fromCharCode(x);
		}
	});

	return shifted.join("");
};

module.exports = caesar;
