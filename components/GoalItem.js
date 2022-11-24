import { StyleSheet, View, Text, Pressable } from "react-native"

const GoalItem = ( props ) => {
	return (
		<View style={ styles.goalItem }>
			<Pressable onPress={ props.deleteGoalHandler.bind( this, props.id ) }
				style={ ( { pressed } ) => pressed && styles.pressedItem }
			>
				<Text style={ styles.goalText }>{ props.text }</Text>
			</Pressable>
		</View>
	)
}
const styles = StyleSheet.create( {
	goalItem: {
		margin: 8,
		padding: 8,
		borderRadius: 6,
		backgroundColor: "#5e0acc",
	},
	pressedItem: {
		opacity: 0.5,
	},
	goalText: {
		color: '#ffffff'
	}
} )
export default GoalItem