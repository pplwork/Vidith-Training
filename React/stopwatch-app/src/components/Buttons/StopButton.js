import React, { Component } from 'react';
import './Button.css';

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
					<button className='stopButton'>Stop</button>
				</div>
			</React.Fragment>
		);
	}
}

export default StopButton;
