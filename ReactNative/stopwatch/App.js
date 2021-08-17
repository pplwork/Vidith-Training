import React from 'react';
import { StyleSheet, View } from 'react-native';
import Stopwatch from './components/Stopwatch';

export default function App() {
	return (
		<React.Fragment>
			<View style={styles.container}>
				<Stopwatch />
			</View>
		</React.Fragment>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f0f6ff'
	}
});
