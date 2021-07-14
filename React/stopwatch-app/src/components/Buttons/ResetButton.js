import React, { Component } from 'react';
import './Button.css';

class ResetButton extends Component {
	constructor (props) {
		super(props);
		this.reset = props.reset;
		this.started = props.timer.started;
	}
	componentDidUpdate () {
		this.started = this.props.timer.started;
	}

	render () {
		return (
			<div
				onClick={() => {
					if (!this.started) this.reset();
				}}>
				<button className='resetButton'>Reset</button>
			</div>
		);
	}
}

export default ResetButton;
