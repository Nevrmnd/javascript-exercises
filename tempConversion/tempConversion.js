const ftoc = function (temp) {
	const converted = (temp - 32) * (5 / 9);
	return Number.isInteger(converted) ? converted : +converted.toFixed(1);
};

const ctof = function (temp) {
	const converted = temp * (9 / 5) + 32;
	return Number.isInteger(converted) ? converted : +converted.toFixed(1);
};

module.exports = {
	ftoc,
	ctof,
};
