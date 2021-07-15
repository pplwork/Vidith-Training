import React, { Component } from 'react';
import './Button.css';
import { connect } from 'react-redux';
import { LAP_TIME } from '../../constants/rootConstants';

class LapButton extends Component {
	render () {
		return (
			<div onClick={this.props.lapTime}>
				<button className='lapButton'>Lap</button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		lapTime : () => {
			dispatch({ type: LAP_TIME });
		}
	};
};

export default connect(null, mapDispatchToProps)(LapButton);
