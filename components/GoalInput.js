import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native"

const GoalInput = ( props ) => {
	return (
		<Modal visible={ props.visible } animationType="slide">
			<View style={ styles.inputContainer }>
				<Image style={ styles.image } source={ { uri: 'https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' } } />
				<TextInput style={ styles.textInput } placeholder='Your course goal!'
					onChangeText={ props.goalInputHandler } value={ props.enteredGoalText }
				/>
				<View style={ styles.buttonContainer }>
					<View style={ styles.button }>
						<Button title='Add Goal' onPress={ props.addGoalHandler } color="#b180f0" />
					</View>
					<View style={ styles.button }>
						<Button title="Cancel" onPress={ props.endAddGoalHandler } color="#f31282" />
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
		margin: 20,
		borderRadius: 100
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#e4d0ff',
		backgroundColor: "#e4d0ff",
		borderRadius: 6,
		color: '#120438',
		width: '90%',
		marginRight: 8,
		marginBottom: 16,
		padding: 16,
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