const initialState = {
	stats: []
}

export default function stats(state = initialState, action) {
	if(action.type === 'OBTAINED_STATS') {
		return {
			stats: action.stats.reverse()
		}	
	} else {
		return state
	}
};