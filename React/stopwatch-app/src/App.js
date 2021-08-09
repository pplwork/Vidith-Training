import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Action from './components/Action';
import Lap from './components/Lap';

class App extends Component {
	constructor() {
		super();
		this.state = {
			laps: [],
			started: false,
			timeElapsed: 0
		};
	}
	start = () => {
		this.setState((prev) => {
			return {
				...prev,
				started: true,
				timeElapsed: prev.timeElapsed + 10
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
				started: false
			};
		});
	};

	resetTimer = () => {
		this.setState({
			laps: [],
			started: false,
			timeElapsed: 0
		});
	};

	laps = () => {
		if (this.state.started) {
			this.setState((prev) => {
				return {
					...prev,
					laps: [
						...prev.laps,
						{
							splitTime: prev.timeElapsed,
							lapTime:
								prev.laps.length > 0
									? prev.timeElapsed - prev.laps.splice(-1)[0].splitTime
									: prev.timeElapsed
						}
					]
				};
			});
		}
	};
	render() {
		return (
			<div className="parent">
				<div className="main">
					<Header />
					<Timer timer={this.state} />
					<Action
						timer={this.state}
						begin={this.beginTimer}
						pause={this.pauseTimer}
						reset={this.resetTimer}
						laps={this.laps}
					/>
				</div>

				<Lap timer={this.state} />
			</div>
		);
	}
}

export default App;
