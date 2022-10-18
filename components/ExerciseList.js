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

const ExerciseList = ({ navigation, data, horizontal = true }) => {
	return (
		<>
			<FlatList
				horizontal={horizontal}
				data={data}
				renderItem={({ item }) => (
					<ExerciseCard navigation={navigation} key={item.id} data={item} />
				)}
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
