import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import HeaderCard from "../../components/HeaderCard";
import ExerciseList from "../../components/ExerciseList";
import BodyPartCard from "../../components/BodyPartCard";
import BodyPartList from "../../components/BodyPartList";
import CustomTextCard from "../../components/CustomTextCard";
import { listOfExercises } from "../../api/listOfExercises";

import Loading from "../../components/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Home = ({ navigation }) => {
	const [name, setName] = useState();
	const [exercises, setExercises] = useState([]);
	const [loading, setLoading] = useState(false);

	const hour = new Date().getHours();
	const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
	let welcomeText = "";

	if (hour < 12) welcomeText = welcomeTypes[0];
	else if (hour < 18) welcomeText = welcomeTypes[1];
	else welcomeText = welcomeTypes[2];
	const getData = async () => {
		try {
			const value = await AsyncStorage.getItem("name");
			console.log("value is ", value);
			if (value !== null) {
				// value previously stored
				console.log("value is value", value);
				setName(value);
			}
		} catch (e) {
			console.log("error is ", e);
			// error reading value
		}
	};

	const getExercises = async () => {
		setLoading(true);
		const data = await listOfExercises();
		setExercises(data);
		setLoading(false);
	};
	useEffect(() => {
		getData();
		getExercises();
	}, []);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<ScrollView
					style={{
						backgroundColor: "white",
					}}
					showsVerticalScrollIndicator={false}>
					<View style={styles.homeHeader}>
						<View style={styles.homeHeader__Left}>
							<Text style={styles.homeHeader__Left_text_grey}>
								{welcomeText}
							</Text>
							<Text style={styles.homeHeader__Left_text_black}>{name}</Text>
						</View>
						<View style={styles.homeHeader__Right}></View>
					</View>

					<HeaderCard />
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
							textTransform: "capitalize",
							color: "rgb(95, 157, 247)",
						}}>
						Explore more exercises
					</Text>
					<ExerciseList data={exercises} navigation={navigation} />

					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
							marginTop: 20,
							textTransform: "capitalize",
							color: "rgb(95, 157, 247)",
						}}>
						Target Body Parts
					</Text>
					<BodyPartList navigation={navigation} />
					<CustomTextCard>
						The body achieves what the mind believes
					</CustomTextCard>
					<Text
						style={{
							fontSize: 25,
							marginBottom: 20,
							marginTop: 20,
							textTransform: "capitalize",
							color: "rgb(95, 157, 247)",
						}}>
						Strengthen More !!
					</Text>
					<BodyPartList navigation={navigation} showMuscle={true} />
				</ScrollView>
			)}
		</>
	);
};

export default Home;

const styles = StyleSheet.create({
	homeHeader: {
		display: "flex",
		justifyContent: "space-between",
	},
	homeHeader__Left_text_grey: {
		color: "#959E9F",
		fontSize: 20,
	},
	homeHeader__Left_text_black: {
		color: "black",
		fontSize: 30,
		fontWeight: "bold",
	},
	homeHeader__Left: {},
	homeHeader__Right: {},
});
