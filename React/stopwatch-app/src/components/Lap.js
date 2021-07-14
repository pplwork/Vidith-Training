import React from 'react';
import './styles.css';

const Lap = ({ timer }) => {
	const convertToTime = (ms) => {
		let time = new Date(ms);
		let h = time.getUTCHours();
		let m = time.getUTCMinutes();
		let s = time.getUTCSeconds();
		ms = time.getUTCMilliseconds() / 10;
		return h + ':' + m + ':' + s + ':' + ms;
	};
	return <div>{timer.laps.map((lap, index) => convertToTime(lap.splitTime))}</div>;
};

export default Lap;
