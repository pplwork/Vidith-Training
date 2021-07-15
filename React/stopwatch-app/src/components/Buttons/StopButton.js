import React, { Component } from 'react';
import { STOP_TIMER } from '../../constants/rootConstants';
import './Button.css';
import { connect } from 'react-redux';

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
						this.props.stopTime();
					}}>
					<button className='stopButton'>Stop</button>
				</div>
			</React.Fragment>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		stopTime : () => {
			dispatch({ type: STOP_TIMER });
		}
	};
};

export default connect(null, mapDispatchToProps)(StopButton);
