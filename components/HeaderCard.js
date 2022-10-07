import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { listOfBodyParts } from "../api/listOfBodyParts";
import { getExerciseDay } from "../utils/getExerciseDay";

const HeaderCard = () => {
	const getBodyParts = async () => {
		const bodyParts = await listOfBodyParts();
		console.log("body parts is ", bodyParts);
	};
	useEffect(() => {
		getBodyParts();
	}, []);

	const day = getExerciseDay();
	let exercise = "Rest";
	if (day == "Monday") exercise = "Chest 🏋️‍♂️";
	if (day == "Tuesday") exercise = "Arms 💪";
	if (day == "Wednesday") exercise = "Back 🏋️";
	if (day == "Thursday") exercise = "Cardio 🏃‍♂️";
	if (day == "Friday") exercise = "Shoulders 🏋️‍♂️";
	if (day == "Saturday") exercise = "Legs 🦵";
	if (day == "Sunday") exercise = "Shoulders 🏋️‍♂️";
	return (
		<View style={styles.HeaderCard}>
			<Text style={styles.cardTitle}>Its {day}!!</Text>
			{day == "Sunday" ? (
				<>
					<Text style={styles.cardSubtitle}>Take Rest</Text>
					<Text style={styles.cardSubtitle__bold}>Have Fun !!</Text>
				</>
			) : (
				<>
					<Text style={styles.cardSubtitle}>Lets Hit Some </Text>
					<Text style={styles.cardSubtitle__bold}>{exercise}</Text>
				</>
			)}
		</View>
	);
};

export default HeaderCard;

const styles = StyleSheet.create({
	HeaderCard: {
		backgroundColor: "#FF731D",
		padding: 20,
		borderRadius: 20,
		marginVertical: 20,
	},
	cardTitle: {
		fontSize: 25,
		color: "#FFF7E9",
		fontWeight: "bold",
	},
	cardSubtitle: {
		fontSize: 40,
		color: "#FFF7E9",
	},
	cardSubtitle__bold: {
		fontSize: 40,
		color: "#FFF7E9",
		lineHeight: 50,
		textTransform: "uppercase",
		fontWeight: "bold",
	},
});
