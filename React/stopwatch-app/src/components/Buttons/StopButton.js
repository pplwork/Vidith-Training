import React, { Component } from 'react';

class StopButton extends Component {
	constructor (props) {
		super(props);
		this.stop = props.stop;
	}

	render () {
		return (
			<React.Fragment>
				<div
					onClick={() => {
						this.stop();
					}}>
					<button>Stop</button>
				</div>
			</React.Fragment>
		);
	}
}

export default StopButton;
