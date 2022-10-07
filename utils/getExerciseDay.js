export const getExerciseDay = () => {
	let today = new Date();
	let day = today.getDay();
	let dayList = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday ",
		"Thursday",
		"Friday",
		"Saturday",
	];

	return dayList[day];
};
