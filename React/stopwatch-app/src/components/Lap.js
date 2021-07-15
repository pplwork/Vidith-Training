import React from 'react';
import './styles.css';
import convertToTime from '../convertToTime';
import { connect } from 'react-redux';

const Lap = (props) => {
	return (
		<div className='container'>
			{props.laps.map((lap, index) => {
				return (
					<div className='lap-main' key={index + 1}>
						<div className='lap-number'>Lap {index + 1}</div>
						<div className='lap-time'>
							<div>
								<div>Split Time</div>
								<div className='lap-value'>
									{
										convertToTime(lap.splitTime).hours >= 10 ? `${convertToTime(lap.splitTime)
											.hours}:` :
										`0${convertToTime(lap.splitTime).hours}:`}
									{
										convertToTime(lap.splitTime).minutes >= 10 ? `${convertToTime(lap.splitTime)
											.minutes}:` :
										`0${convertToTime(lap.splitTime).minutes}:`}
									{
										convertToTime(lap.splitTime).seconds >= 10 ? `${convertToTime(lap.splitTime)
											.seconds}:` :
										`0${convertToTime(lap.splitTime).seconds}:`}
									{
										convertToTime(lap.splitTime).milliseconds >= 10 ? `${convertToTime(
											lap.splitTime
										).milliseconds}` :
										`0${convertToTime(lap.splitTime).milliseconds}`}
								</div>
							</div>
							<div>
								<div>Lap Time</div>
								<div className='lap-value'>
									{
										convertToTime(lap.lapTime).hours >= 10 ? `${convertToTime(lap.lapTime)
											.hours}:` :
										`0${convertToTime(lap.lapTime).hours}:`}
									{
										convertToTime(lap.lapTime).minutes >= 10 ? `${convertToTime(lap.lapTime)
											.minutes}:` :
										`0${convertToTime(lap.lapTime).minutes}:`}
									{
										convertToTime(lap.lapTime).seconds >= 10 ? `${convertToTime(lap.lapTime)
											.seconds}:` :
										`0${convertToTime(lap.lapTime).seconds}:`}
									{
										convertToTime(lap.lapTime).milliseconds >= 10 ? `${convertToTime(lap.lapTime)
											.milliseconds}` :
										`0${convertToTime(lap.lapTime).milliseconds}`}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		laps : state.laps
	};
};

export default connect(mapStateToProps)(Lap);
