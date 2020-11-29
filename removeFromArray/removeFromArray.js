const removeFromArray = function (arr, ...args) {
	return arr.filter((x) => !args.includes(x));
};

module.exports = removeFromArray;
