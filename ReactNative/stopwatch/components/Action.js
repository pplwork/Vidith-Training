import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Start from './Buttons/Start';
import Stop from './Buttons/Stop';
import Lap from './Buttons/Lap';
import Reset from './Buttons/Reset';

const Action = ({ stopWatch, setStopWatch }) => {
	return (
		<View style={styles.ActionContainer}>
			<Start stopWatch={stopWatch} setStopWatch={setStopWatch} />
			<Stop stopWatch={stopWatch} setStopWatch={setStopWatch} />
			<Lap stopWatch={stopWatch} setStopWatch={setStopWatch} />
			<Reset stopWatch={stopWatch} setStopWatch={setStopWatch} />
		</View>
	);
};

export default React.memo(Action);

const styles = StyleSheet.create({
	ActionContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '80%',
		marginVertical: 30
	}
});
