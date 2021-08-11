import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';

const GoalInput = (props) => {
	const [ enteredGoal, setEnteredGoal ] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	return (
		<Modal visible={props.isVisible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={goalInputHandler}
					value={enteredGoal}
				/>
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button
							title="CANCEL"
							color="red"
							onPress={() => {
								props.onCancel();
								setEnteredGoal('');
							}}
						/>
					</View>
					<View style={styles.button}>
						<Button
							title="ADD"
							onPress={() => {
								props.onAddGoal(enteredGoal);
								setEnteredGoal('');
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
};
const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},

	input: {
		width: '80%',
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		marginVertical: 10
	},

	buttonContainer: {
		width: '60%',
		flexDirection: 'row',
		justifyContent: 'space-around'
	},

	button: {
		width: '40%'
	}
});

export default GoalInput;
