const palindromes = function (word) {
	const arr = [];
	const lower = word.toLowerCase();
	for (let i = 0; i < word.length; i++) {
		if (lower.charCodeAt(i) >= 97 && lower.charCodeAt(i) <= 122) {
			arr.push(lower[i]);
		}
	}
	const newWord = arr.join("");
	const reversed = arr.reverse().join("");
	return newWord === reversed;
};

module.exports = palindromes;
