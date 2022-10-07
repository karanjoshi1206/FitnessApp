import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CustomTextCard = ({ children }) => {
	return (
		<View style={styles.CustomTextCard}>
			<Text style={styles.CustomTextCard_title}>{children}</Text>
		</View>
	);
};

export default CustomTextCard;

const styles = StyleSheet.create({
	CustomTextCard: {
		backgroundColor: "#FF731D",
		padding: 20,
		borderRadius: 20,
		marginVertical: 20,
	},
	CustomTextCard_title: {
		fontSize: 40,
		color: "#FFF7E9",
		fontWeight: "bold",
	},
});
