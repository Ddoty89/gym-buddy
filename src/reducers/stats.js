const initialState = {
	stats: []
}

let username = localStorage.getItem('username');

export default function stats(state = initialState, action) {
	if(action.type === 'OBTAINED_STATS') {
		return {
			stats: action.stats.filter(item => item.username === username)
		}	
	} else {
		return state
	}
};