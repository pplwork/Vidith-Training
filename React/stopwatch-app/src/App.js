import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Action from './components/Action';

class App extends Component {
	constructor () {
		super();
		this.state = {
			started     : false,
			timeElapsed : 0
		};
	}
	start = () => {
		this.setState((prev) => {
			return {
				...prev,
				started     : true,
				timeElapsed : prev.timeElapsed + 10
			};
		});
	};

	beginTimer = () => {
		this.id = setInterval(this.start, 10);
	};

	pauseTimer = () => {
		clearInterval(this.id);
		this.setState((prev) => {
			return {
				...prev,
				started : false
			};
		});
	};

	resetTimer = () => {
		this.setState({
			started     : false,
			timeElapsed : 0
		});
	};
	render () {
		return (
			<div className='App'>
				<Header />
				<Timer timer={this.state} />
				<Action timer={this.state} begin={this.beginTimer} pause={this.pauseTimer} reset={this.resetTimer} />
			</div>
		);
	}
}

export default App;
