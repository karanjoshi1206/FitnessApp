import { StyleSheet, Text, View } from "react-native";
import Lottie from "lottie-react-native";

import React from "react";

const Loading = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Lottie
				style={{
					height: 200,
					width: 200,
				}}
				source={require("./loading.json")}
				autoPlay
				loop
			/>
		</View>
	);
};

export default Loading;

const styles = StyleSheet.create({});
