// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { createStackNavigator } from "@react-navigation/stack";

// import Home from "./screens/Home/Home";

// function App() {
// 	const Stack = createStackNavigator();

// 	return (
// 		<>
// 			<StatusBar style='auto' />
// 			<NavigationContainer>
// 				<Stack.Navigator>
// 					<Stack.Screen name='Home' component={<Home />} />
// 				</Stack.Navigator>
// 			</NavigationContainer>
// 		</>
// 	);
// }

// export default () => {
// 	return <App />;
// };

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home/Home";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ExerciseDetails from "./screens/ExerciseDetails";
import Login from "./screens/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function App({ navigation }) {
	// const [name, setName] = useState("");
	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("name");
			if (value !== null) {
				// value previously stored
				// setName(value);
				return true;
				// console.log("value is ", value);
				// navigation.navigate("Home");
			}
		} catch (e) {
			// error reading value
			return false;
		}
	};

	useEffect(() => {
		getData();
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='auto' />
			<NavigationContainer>
				<Stack.Navigator initialRouteName={getData ? "Home" : "Login"}>
					<Stack.Screen
						options={{
							headerShown: false,
						}}
						name='Login'
						component={Login}
					/>
					<Stack.Screen
						options={{
							headerShown: false,
						}}
						name='Home'
						component={Home}
					/>
					<Stack.Screen
						options={{
							title: "Exercise Details",
						}}
						name='Exercise Details'
						component={ExerciseDetails}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaView>
	);
}

export default App;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingHorizontal: 10,
	},
});
