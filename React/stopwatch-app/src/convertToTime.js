const convertToTime = (ms) => {
	let time = new Date(ms);
	let hours = time.getUTCHours();
	let minutes = time.getUTCMinutes();
	let seconds = time.getUTCSeconds();
	let milliseconds = time.getUTCMilliseconds() / 10;
	return {
		hours,
		minutes,
		seconds,
		milliseconds
	};
};

export default convertToTime;
