const fibonacci = function (number) {
	const index = parseInt(number);
	if (index < 0) {
		return "OOPS";
	}
	const arr = [1];
	for (let i = 0; i < index; i++) {
		if (arr.length === 1) {
			arr.push(1);
		} else {
			let n = arr[i] + arr[i - 1];
			arr.push(n);
		}
	}

	return arr[index - 1];
};

module.exports = fibonacci;
