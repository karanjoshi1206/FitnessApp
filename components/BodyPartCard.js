import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import gym from "../assets/gym.png";
import body from "../assets/body-part.png";

const BodyPartCard = ({ navigation, data, showMuscle }) => {
	return (
		<TouchableOpacity
			onPress={() =>
				navigation.navigate("Exercise Details", {
					data: data,
					showMuscle: showMuscle,
				})
			}
			style={styles.BodyPartCard}>
			<Image
				style={styles.gymImage}
				resizeMode='cover'
				source={showMuscle ? body : gym}
			/>

			<Text style={styles.bodyPart}>{data}</Text>
		</TouchableOpacity>
	);
};

export default BodyPartCard;

const styles = StyleSheet.create({
	BodyPartCard: {
		marginHorizontal: 30,
		display: "flex",
		justifyContent: "center",
	},
	gymImage: {
		height: 80,
		width: 80,
	},
	bodyPart: {
		textAlign: "center",
		marginVertical: 4,
		color: "rgb(23, 70, 162)",
		fontSize: 18,
		textTransform: "capitalize",
	},
});
