import React from 'react';
import './Button.css';
import { useDispatch } from 'react-redux';
import { LAP_TIME } from '../../constants/rootConstants';

const LapButton = () => {
	const dispatch = useDispatch();
	return (
		<div onClick={() => dispatch({ type: LAP_TIME })}>
			<button className='lapButton'>Lap</button>
		</div>
	);
};

export default LapButton;
