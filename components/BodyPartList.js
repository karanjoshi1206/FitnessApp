import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BodyPartCard from "./BodyPartCard";
import { listOfBodyParts } from "../api/listOfBodyParts";
import { listOfMuscles } from "../api/listOfMuscles";

const BodyPartList = ({ navigation, showMuscle = false }) => {
	const [bodyParts, setBodyParts] = useState([]);
	const getBodyParts = async () => {
		const data = await listOfBodyParts();
		if (data?.message) setBodyParts([]);
		else setBodyParts(data);
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
			{bodyParts?.length > 0 ? (
				<>
					{bodyParts?.map((elem) => (
						<BodyPartCard
							navigation={navigation}
							showMuscle={showMuscle}
							data={elem}
							key={elem}
						/>
					))}
				</>
			) : (
				<Text>Oops Something went wrong!!</Text>
			)}
		</ScrollView>
	);
};

export default BodyPartList;

const styles = StyleSheet.create({});
