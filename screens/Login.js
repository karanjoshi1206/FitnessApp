import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Lottie from "lottie-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
	const [name, setName] = useState("");
	const storeData = async (value) => {
		try {
			await AsyncStorage.setItem("name", value);
			navigation.navigate("Home");
		} catch (e) {
			// saving error
		}
	};
	return (
		<View
			style={{
				backgroundColor: "white",
				flex: 1,
				// justifyContent: "center",
				borderColor: "black",
				paddingTop: 150,
				paddingHorizontal: 20,
			}}>
			<View
				style={{
					justifyContent: "center",
					alignItems: "center",
					marginBottom: 50,
				}}>
				<Lottie
					style={{
						height: 200,
						width: 200,
					}}
					source={require("./runner.json")}
					autoPlay
					loop
				/>
			</View>
			<Text
				style={{
					marginBottom: 2,
				}}>
				Enter Your Name
			</Text>
			<TextInput
				onChangeText={setName}
				placeholder='Eg. Karan Joshi'
				style={{
					borderColor: "grey",
					paddingVertical: 10,
					paddingHorizontal: 4,
					borderWidth: 1,
					borderRadius: 10,
				}}
			/>
			<TouchableOpacity
				onPress={() => storeData(name)}
				style={{
					marginTop: 30,
					backgroundColor: "#FF731D",
					padding: 10,
					borderRadius: 10,
				}}>
				<Text
					style={{
						textAlign: "center",
						color: "white",
						fontSize: 20,
					}}>
					Move
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({});
