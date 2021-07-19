import React from 'react';
import { STOP_TIMER } from '../../constants/rootConstants';
import './Button.css';
import { useDispatch } from 'react-redux';

const StopButton = () => {
	const dispatch = useDispatch();
	return (
		<React.Fragment>
			<div
				onClick={() => {
					dispatch({ type: STOP_TIMER });
				}}>
				<button className='stopButton'>Stop</button>
			</div>
		</React.Fragment>
	);
};

export default StopButton;
