import React, { Component } from 'react';
import './Button.css';
import { connect } from 'react-redux';
import { RESET_TIMER } from '../../constants/rootConstants';

class ResetButton extends Component {
	render () {
		return (
			<div
				onClick={() => {
					if (!this.started) this.props.resetTime();
				}}>
				<button className='resetButton'>Reset</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		started : state.started
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		resetTime : () => {
			dispatch({ type: RESET_TIMER });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ResetButton);
