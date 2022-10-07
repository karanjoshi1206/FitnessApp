import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import RoundButton from "./RoundButton";
const screenWidth = Dimensions.get("screen").width;
const ExerciseCard = ({ data }) => {
	return (
		<TouchableOpacity style={styles.ExerciseCard}>
			<Text style={styles.ExerciseCard_text}>{data.name}</Text>
			<Image
				style={styles.ExerciseCard_image}
				source={{ uri: data.gifUrl }}
				// source={data.gifUrl}
				resizeMode='cover'
			/>
			<View
				style={{
					display: "flex",
					flexDirection: "row",
					marginTop: 10,
				}}>
				<RoundButton>{data.bodyPart}</RoundButton>

				<RoundButton>{data.target}</RoundButton>
			</View>
		</TouchableOpacity>
	);
};

export default ExerciseCard;

const styles = StyleSheet.create({
	ExerciseCard: {
		width: screenWidth,
		backgroundColor: "rgb(255, 247, 233)",
		padding: 20,
	},
	ExerciseCard_text: {
		fontSize: 20,
		color: "#1746A2",
		fontWeight: "600",
		textTransform: "capitalize",
		marginBottom: 10,
	},
	ExerciseCard_image: {
		height: 200,
		width: screenWidth - 70,
	},
});
