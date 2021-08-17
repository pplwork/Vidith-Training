import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Clock from './Clock';
import Action from './Action';
import Laps from './Laps';

const Stopwatch = () => {
	const [ stopWatch, setStopWatch ] = useState({
		laps: [],
		isRunning: false,
		timeElapsed: 0,
		resetNextRun: false,
		interval: null
	});
	return (
		<View style={styles.container}>
			<Clock stopWatch={stopWatch} />
			<Action stopWatch={stopWatch} setStopWatch={setStopWatch} />
			<Laps laps={stopWatch.laps} />
		</View>
	);
};

export default React.memo(Stopwatch);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#e9f2f7',
		alignItems: 'center',
		paddingTop: 100,
		paddingBottom: 10
	}
});
