import React from 'react';
import StartButton from './Buttons/StartButton';
import ResetButton from './Buttons/ResetButton';
import StopButton from './Buttons/StopButton';
import LapsButton from './Buttons/LapsButton';
import './styles.css';

const Action = ({ timer, begin, pause, reset, laps }) => {
	return (
		<div className='action'>
			<StopButton stop={pause} />
			<StartButton begin={begin} pause={pause} timer={timer} />
			<LapsButton laps={laps} />
			<ResetButton reset={reset} timer={timer} />
		</div>
	);
};

export default Action;
