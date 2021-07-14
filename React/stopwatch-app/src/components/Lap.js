import React from 'react';
import './styles.css';

const Lap = ({ timer }) => {
	const convertToTime = (ms) => {
		let time = new Date(ms);
		let h = time.getUTCHours();
		let m = time.getUTCMinutes();
		let s = time.getUTCSeconds();
		ms = time.getUTCMilliseconds() / 10;
		return {
			h,
			m,
			s,
			ms
		};
	};
	return (
		<div className='container'>
			{timer.laps.map((lap, index) => {
				return (
					<div className='lap-main' key={index + 1}>
						<div className='lap-number'>Lap {index + 1}</div>
						<div className='lap-time'>
							<div>
								<div>Split Time</div>
								<div className='lap-value'>
									{
										convertToTime(lap.splitTime).h >= 10 ? `${convertToTime(lap.splitTime).h}:` :
										`0${convertToTime(lap.splitTime).h}:`}
									{
										convertToTime(lap.splitTime).m >= 10 ? `${convertToTime(lap.splitTime).m}:` :
										`0${convertToTime(lap.splitTime).m}:`}
									{
										convertToTime(lap.splitTime).s >= 10 ? `${convertToTime(lap.splitTime).s}:` :
										`0${convertToTime(lap.splitTime).s}:`}
									{
										convertToTime(lap.splitTime).ms >= 10 ? `${convertToTime(lap.splitTime).ms}` :
										`0${convertToTime(lap.splitTime).ms}`}
								</div>
							</div>
							<div>
								<div>Lap Time</div>
								<div className='lap-value'>
									{
										convertToTime(lap.lapTime).h >= 10 ? `${convertToTime(lap.lapTime).h}:` :
										`0${convertToTime(lap.lapTime).h}:`}
									{
										convertToTime(lap.lapTime).m >= 10 ? `${convertToTime(lap.lapTime).m}:` :
										`0${convertToTime(lap.lapTime).m}:`}
									{
										convertToTime(lap.lapTime).s >= 10 ? `${convertToTime(lap.lapTime).s}:` :
										`0${convertToTime(lap.lapTime).s}:`}
									{
										convertToTime(lap.lapTime).ms >= 10 ? `${convertToTime(lap.lapTime).ms}` :
										`0${convertToTime(lap.lapTime).ms}`}
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Lap;
