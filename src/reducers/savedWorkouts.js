const initialState = {
	savedWorkouts: []
}

let username = localStorage.getItem('username');

export default function savedWorkouts(state = initialState, action) {
	if(action.type === 'SAVED_WORKOUTS') {
		return {
			savedWorkoutList: action.data.filter(item => item.username === username)
		}
	} else { 
		return state
	}
}

