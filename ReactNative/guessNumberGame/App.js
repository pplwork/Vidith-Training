import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
	const [ userNumber, setUserNumber ] = useState();
	const [ rounds, setRounds ] = useState(0);

	const configureNewGameHandler = () => {
		setRounds(0);
		setUserNumber(null);
	};

	const startGameHandler = (selectedNumber) => {
		setUserNumber(selectedNumber);
		setRounds(0);
	};
	const gameOverHandler = (numOfRounds) => {
		setRounds(numOfRounds);
	};
	let content = <StartGameScreen onStartGame={startGameHandler} />;
	if (userNumber && rounds <= 0) {
		content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />;
	} else if (rounds > 0) {
		content = <GameOverScreen rounds={rounds} userNumber={userNumber} onRestart={configureNewGameHandler} />;
	}

	return (
		<View style={styles.container}>
			<Header title="Guess a Number" />
			{content}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
