import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BodyPartCard from "./BodyPartCard";
import { listOfBodyParts } from "../api/listOfBodyParts";
import { listOfMuscles } from "../api/listOfMuscles";

const BodyPartList = ({ showMuscle = false }) => {
	const [bodyParts, setBodyParts] = useState([]);
	const getBodyParts = async () => {
		const data = await listOfBodyParts();
		setBodyParts(data);
	};
	const getMuscle = async () => {
		const data = await listOfMuscles();
		setBodyParts(data);
	};
	useEffect(() => {
		if (showMuscle) getMuscle();
		else getBodyParts();
	}, []);
	return (
		<ScrollView
			style={{
				paddingVertical: 10,
			}}
			horizontal={true}>
			{bodyParts.map((elem) => (
				<BodyPartCard showMuscle={showMuscle} data={elem} key={elem} />
			))}
		</ScrollView>
	);
};

export default BodyPartList;

const styles = StyleSheet.create({});
