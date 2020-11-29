const sumAll = function (n1, n2) {
	if (!Number.isInteger(n1) | !Number.isInteger(n2) | (n1 < 0) | (n2 < 0)) {
		return "ERROR";
	}

	if (n2 > n1) {
		if (n2 === n1) {
			return n2++;
		} else {
			return n2 + sumAll(n1, n2 - 1);
		}
	} else {
		if (n1 === n2) {
			return n1++;
		} else {
			return n1 + sumAll(n1 - 1, n2);
		}
	}
};

module.exports = sumAll;
