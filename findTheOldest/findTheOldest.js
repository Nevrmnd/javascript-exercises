let findTheOldest = function (arr) {
	const today = new Date();
	const currYear = today.getFullYear();
	arr.sort((a, b) => {
		return (
			(b.yearOfDeath || currYear) - b.yearOfBirth - ((a.yearOfDeath || currYear) - a.yearOfBirth)
		);
	});

	return arr[0];
};

module.exports = findTheOldest;
