import React, { useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';

const Play = ({ stopWatch, setStopWatch }) => {
	const run = () => {
		setStopWatch((prev) => ({
			...prev,
			isRunning: true,
			timeElapsed: prev.timeElapsed + 10
		}));
	};

	const watchHandler = () => {
		if (stopWatch.isRunning) {
			clearInterval(stopWatch.interval);
			setStopWatch((prev) => ({
				...prev,
				isRunning: false,
				interval: null
			}));
		} else {
			setStopWatch((prev) => ({
				...prev,
				interval: setInterval(run, 10),
				timeElapsed: prev.resetNextRun ? 0 : prev.timeElapsed,
				resetNextRun: false,
				laps: prev.resetNextRun ? [] : prev.laps
			}));
		}
	};
	return (
		<View>
			{stopWatch.isRunning ? (
				<Button title="Pause" color="#385e8f" onPress={watchHandler} />
			) : (
				<Button title="Start" color="#385e8f" onPress={watchHandler} />
			)}
		</View>
	);
};

export default Play;

const styles = StyleSheet.create({});
