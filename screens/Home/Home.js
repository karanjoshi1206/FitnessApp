import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderCard from "../../components/HeaderCard";
import ExerciseList from "../../components/ExerciseList";
import BodyPartCard from "../../components/BodyPartCard";
import BodyPartList from "../../components/BodyPartList";
import CustomTextCard from "../../components/CustomTextCard";
const Home = () => {
	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={styles.homeHeader}>
				<View style={styles.homeHeader__Left}>
					<Text style={styles.homeHeader__Left_text_grey}>Good Morning</Text>
					<Text style={styles.homeHeader__Left_text_black}>Karan Joshi</Text>
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
			<ExerciseList />

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
			<BodyPartList />
			<CustomTextCard>The body achieves what the mind believes</CustomTextCard>
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
			<BodyPartList showMuscle={true} />
		</ScrollView>
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
