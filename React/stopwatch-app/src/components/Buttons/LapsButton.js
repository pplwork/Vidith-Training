import React, { Component } from 'react';
import './Button.css';

class LapButton extends Component {
	constructor (props) {
		super(props);
		this.laps = props.laps;
	}
	render () {
		return (
			<div onClick={this.laps}>
				<button className='lapButton'>Lap</button>
			</div>
		);
	}
}

export default LapButton;
