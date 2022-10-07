import {
	Dimensions,
	FlatList,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ExerciseCard from "./ExerciseCard";
import { listOfExercises } from "../api/listOfExercises";

const ExerciseList = () => {
	const [exercises, setExercises] = useState([]);
	const getExercises = async () => {
		const data = await listOfExercises();
		setExercises(data);
	};
	useEffect(() => {
		getExercises();
	}, []);
	return (
		<>
			<FlatList
				horizontal={true}
				data={exercises}
				renderItem={({ item }) => <ExerciseCard key={item.id} data={item} />}
				keyExtractor={(item) => item.id}
				snapToAlignment='start'
				decelerationRate={"fast"}
				snapToInterval={Dimensions.get("screen").width}
			/>
		</>
	);
};

export default ExerciseList;

const styles = StyleSheet.create({});
