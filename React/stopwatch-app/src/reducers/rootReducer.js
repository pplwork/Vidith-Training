import { START_TIMER, STOP_TIMER, RESET_TIMER, LAP_TIME, SET_ID } from '../constants/rootConstants';

const initialState = {
	laps        : [],
	started     : false,
	timeElapsed : 0,
	id          : null
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case START_TIMER:
			return {
				...state,
				started     : true,
				timeElapsed : state.timeElapsed + 10
			};
		case SET_ID:
			return {
				...state,
				started : true,
				id      : action.payload,
				elapsed : state.timeElapsed
			};
		case STOP_TIMER:
			clearInterval(state.id);
			return {
				...state,
				started : false
			};
		case RESET_TIMER:
			if (!state.started) {
				return {
					laps        : [],
					started     : false,
					timeElapsed : 0,
					id          : null
				};
			}
			return state;
		case LAP_TIME:
			if (state.started) {
				return {
					...state,
					laps : [
						...state.laps,
						{
							splitTime : state.timeElapsed,
							lapTime   :

									state.laps.length > 0 ? state.timeElapsed - state.laps.splice(-1)[0].splitTime :
									state.timeElapsed
						}
					]
				};
			}
			return state;
		default:
			return state;
	}
};

export default rootReducer;
