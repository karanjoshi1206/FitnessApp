import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home/Home";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style='auto' />
			<Home />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: 50,
		paddingHorizontal: 15,
		paddingBottom: 10,
	},
});
