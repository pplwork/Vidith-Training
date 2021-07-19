import React from 'react';
import './styles.css';
import convertToTime from '../convertToTime';
import { useSelector } from 'react-redux';

const Timer = () => {
	const timeElapsed = useSelector((state) => state.timeElapsed);
	console.log(timeElapsed);
	const { hours, minutes, seconds, milliseconds } = convertToTime(timeElapsed);
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
};

export default Timer;
