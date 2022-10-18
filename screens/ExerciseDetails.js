import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ExerciseList from "../components/ExerciseList";
import { listByBodyParts } from "../api/listByBodyParts";
import { listByMuscles } from "../api/listByMuscles";
import Loading from "../components/Loading";

const ExerciseDetails = ({ route, navigation }) => {
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		navigation.setOptions({
			title: `${route.params.data?.toUpperCase()} Exercises`,
		});
	}, [navigation]);
	const [exercises, setExercises] = useState([]);
	const getExercises = async () => {
		setLoading(true);
		let data;
		if (route.params.showMuscle) {
			data = await listByMuscles(route.params.data);
		} else {
			data = await listByBodyParts(route.params.data);
		}
		setExercises(data);
		setLoading(false);
	};
	useEffect(() => {
		getExercises();
	}, []);

	return (
		<View
			style={{
				backgroundColor: "#fff",
				flex: 1,
			}}>
			{loading ? (
				<Loading />
			) : (
				<ExerciseList horizontal={false} data={exercises} />
			)}
		</View>
	);
};

export default ExerciseDetails;

const styles = StyleSheet.create({});
