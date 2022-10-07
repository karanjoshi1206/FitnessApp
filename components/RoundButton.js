import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RoundButton = ({ children }) => {
	return (
		<View style={styles.RoundButton}>
			<Text
				style={{
					color: "rgb(255, 247, 233)",
					textTransform: "capitalize",
					fontWeight: "400",
				}}>
				{children}
			</Text>
		</View>
	);
};

export default RoundButton;

const styles = StyleSheet.create({
	RoundButton: {
		backgroundColor: "rgb(255, 115, 29)",
		padding: 10,
		marginHorizontal: 10,
		paddingHorizontal: 20,
		borderRadius: 15,
	},
});
