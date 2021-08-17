import React from 'react';
import { View, Button } from 'react-native';

const Lap = ({ stopWatch, setStopWatch }) => {
	const lapHandler = () => {
		if (stopWatch.isRunning) {
			setStopWatch((prev) => ({
				...prev,
				laps: [
					...prev.laps,
					{
						splitTime: prev.timeElapsed,
						lapTime:
							prev.laps.length > 0
								? prev.timeElapsed - prev.laps.slice(-1)[0].splitTime
								: prev.timeElapsed
					}
				]
			}));
		}
	};
	return (
		<View>
			<Button title="Lap" color="#385e8f" onPress={lapHandler} />
		</View>
	);
};

export default Lap;
