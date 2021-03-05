function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function sum(arr) {
	return arr.length === 0 ? 0 : arr.reduce((acc, val) => (acc += val));
}

function multiply(arr) {
	return arr.reduce((acc, val) => (acc *= val));
}

function power(a, b) {
	let expo = 1;
	for (let i = 0; i < b; i++) {
		expo *= a;
	}
	return expo;
}

function factorial(n) {
	let product = n;
	if (n === 0) {
		return 1;
	} else {
		for (let i = n - 1; i > 0; i--) {
			product *= i;
		}
	}
	return product;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
