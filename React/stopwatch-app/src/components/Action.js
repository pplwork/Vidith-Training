import React from 'react';
import StartButton from './Buttons/StartButton';
import ResetButton from './Buttons/ResetButton';
import StopButton from './Buttons/StopButton';
import LapsButton from './Buttons/LapsButton';
import './styles.css';

const Action = () => {
	return (
		<div className='action'>
			<StopButton />
			<StartButton />
			<LapsButton />
			<ResetButton />
		</div>
	);
};

export default Action;
