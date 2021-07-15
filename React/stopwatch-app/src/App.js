import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Action from './components/Action';
import Lap from './components/Lap';

class App extends Component {
	render () {
		return (
			<div className='parent'>
				<div className='main'>
					<Header />
					<Timer />
					<Action />
				</div>
				<Lap />
			</div>
		);
	}
}

export default App;
