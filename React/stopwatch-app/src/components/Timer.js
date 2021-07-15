import React, { Component } from 'react';
import './styles.css';
import { connect } from 'react-redux';
import convertToTime from '../convertToTime';

class Timer extends Component {
	render () {
		const { hours, minutes, seconds, milliseconds } = convertToTime(this.props.timeElapsed);
		return (
			<React.Fragment>
				<div className='timer'>
					<div className='hour'>
						{
							hours >= 10 ? `${hours}` :
							`0${hours}`}
					</div>:
					<div className='min'>
						{
							minutes >= 10 ? `${minutes}` :
							`0${minutes}`}
					</div>:
					<div className='sec'>
						{
							seconds >= 10 ? `${seconds}` :
							`0${seconds}`}
					</div>:
					<div className='msec'>
						{
							milliseconds >= 10 ? `${milliseconds}` :
							`0${milliseconds}`}
					</div>
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		timeElapsed : state.timeElapsed
	};
};

export default connect(mapStateToProps)(Timer);
