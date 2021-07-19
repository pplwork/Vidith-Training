import React from 'react';
import './Button.css';
import { useSelector, useDispatch } from 'react-redux';
import { START_TIMER, SET_ID, STOP_TIMER } from '../../constants/rootConstants';

const StartButton = () => {
	const [
		started,
		id
	] = useSelector((state) => [
		state.started,
		state.id
	]);

	const dispatch = useDispatch();

	const setId = (id) => {
		dispatch({ type: SET_ID, payload: id });
	};

	const startTime = () => {
		dispatch({ type: START_TIMER });
	};
	return (
		<div
			id='startBtn'
			onClick={() => {
				if (started) {
					dispatch({ type: STOP_TIMER });
				}
				else {
					setId(setInterval(startTime, 10));
				}
			}}>
			<button className='startButton'>
				{
					started ? 'Pause' :
					'Start'}
			</button>
		</div>
	);
};

export default StartButton;
