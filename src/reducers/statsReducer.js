const initialState = {
	stats: []
}

export default function statsReducer(state = initialState, action) {
	if(action.type === 'OBTAINED_STATS') {
		return {
			...state,
			stats: action.stats
		}
	} else {
		return state
	}
};