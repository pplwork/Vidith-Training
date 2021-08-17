import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Reset = ({ stopWatch, setStopWatch }) => {
	const resetWatch = () => {
		if (!stopWatch.isRunning) {
			setStopWatch((prev) => ({
				...prev,
				timeElapsed: 0,
				laps: [],
				resetNextRun: false,
				interval: null
			}));
		}
	};
	return (
		<View>
			<Button title="Reset" color="#385e8f" onPress={resetWatch} />
		</View>
	);
};

export default Reset;

const styles = StyleSheet.create({});
