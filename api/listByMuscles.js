export const listByMuscles = async (bodyPart) => {
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "ccabcea3f5msh08224577310e35ap12d317jsn1d810fc322d8",
			"X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
		},
	};

	const response = await fetch(
		`https://exercisedb.p.rapidapi.com/exercises/target/${bodyPart}`,
		options
	);
	console.log("data is ", data);
	const data = await response.json();
	return data;
};
