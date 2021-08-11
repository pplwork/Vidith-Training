import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ isAddMode, setIsAddMode ] = useState(false);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals((currentGoals) => [ ...currentGoals, { key: Math.random().toString(), value: goalTitle } ]);
		setIsAddMode(false);
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.key !== goalId);
		});
	};

	const cancelGoalAdditionHandler = () => {
		setIsAddMode(false);
	};
	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput isVisible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler} />
			<FlatList
				data={courseGoals}
				renderItem={(itemData) => (
					<GoalItem id={itemData.item.key} title={itemData.item.value} onDelete={removeGoalHandler} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	}
});
