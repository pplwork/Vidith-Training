import React from 'react';
import './Button.css';
import { useSelector, useDispatch } from 'react-redux';
import { RESET_TIMER } from '../../constants/rootConstants';

const ResetButton = () => {
	const started = useSelector((state) => state.started);
	const dispatch = useDispatch();
	return (
		<div
			onClick={() => {
				if (!started) dispatch({ type: RESET_TIMER });
			}}>
			<button className='resetButton'>Reset</button>
		</div>
	);
};

export default ResetButton;
