import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	boxTop: {
		// backgroundColor: "red",
		height: Dimensions.get("window").height / 3,
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	boxMid: {
		// backgroundColor: "green",
		height: Dimensions.get("window").height / 4,
		width: "100%",
		paddingHorizontal: 37,
	},
	boxBottom: {
		// backgroundColor: "blue",
		height: Dimensions.get("window").height / 4,
		width: "100%",
		alignItems: "center",
	},
	text: {
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
		marginTop: 50,
	},
});
