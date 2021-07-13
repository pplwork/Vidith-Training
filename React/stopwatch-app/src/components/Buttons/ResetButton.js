import React, { Component } from 'react';

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
				<button>Reset</button>
			</div>
		);
	}
}

export default ResetButton;
