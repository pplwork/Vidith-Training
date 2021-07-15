import React, { Component } from 'react';
import './Button.css';
import { connect } from 'react-redux';
import { START_TIMER, SET_ID, STOP_TIMER } from '../../constants/rootConstants';

class StartButton extends Component {
	render () {
		return (
			<div
				id='startBtn'
				onClick={() => {
					if (this.props.started) {
						this.props.stopTime();
					}
					else {
						this.props.setId(setInterval(this.props.startTime, 10));
					}
				}}>
				<button className='startButton'>
					{
						this.props.started ? 'Pause' :
						'Start'}
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		started : state.started,
		id      : state.id
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		startTime : () => {
			dispatch({ type: START_TIMER });
		},
		setId     : (id) => {
			dispatch({ type: SET_ID, payload: id });
		},
		stopTime  : () => {
			dispatch({ type: STOP_TIMER });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(StartButton);
