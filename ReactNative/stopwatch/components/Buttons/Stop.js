import React from 'react';
import { View, Button } from 'react-native';

const Stop = ({ stopWatch, setStopWatch }) => {
	const stopHandler = () => {
		clearInterval(stopWatch.interval);
		setStopWatch((prev) => ({
			...prev,
			resetNextRun: true,
			interval: null,
			isRunning: false
		}));
	};

	return (
		<View>
			<Button title="Stop" color="#385e8f" onPress={stopHandler} />
		</View>
	);
};

export default Stop;
