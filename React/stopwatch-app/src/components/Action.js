import React from 'react';
import StartButton from './Buttons/StartButton';
import ResetButton from './Buttons/ResetButton';
import StopButton from './Buttons/StopButton';

const Action = ({ timer, begin, pause, reset }) => {
	return (
		<div>
			<StartButton begin={begin} pause={pause} timer={timer} />
			<StopButton stop={pause} />
			<ResetButton reset={reset} timer={timer} />
		</div>
	);
};

export default Action;
