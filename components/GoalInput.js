import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ( props ) => {
	return (
		<Modal visible={ props.visible } animationType="slide">
			<View style={ styles.inputContainer }>
				<Image style={styles.image} source={require('../assets/images/icon.png')} />
				<TextInput style={ styles.textInput } placeholder='Your course goal!'
					onChangeText={ props.goalInputHandler } value={ props.enteredGoalText }
				/>
				<View style={ styles.buttonContainer }>
					<View style={ styles.button }>
						<Button title='Add Goal' onPress={ props.addGoalHandler } />
					</View>
					<View style={ styles.button }>
						<Button title="Cancel" onPress={ props.endAddGoalHandler } />
					</View>
				</View>
			</View>
		</Modal>
	)
}
const styles = StyleSheet.create( {
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 16,
		backgroundColor: "#311b6b"
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#cccccc',
		width: '90%',
		marginRight: 8,
		marginBottom: 16,
		padding: 8,
	},
	buttonContainer: {
		flexDirection: 'row'
	},
	button: {
		width: 100,
		marginHorizontal: 8,
	}
} )
export default GoalInput