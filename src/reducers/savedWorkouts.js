const initialState = {
	savedWorkouts: []
}

let username = localStorage.getItem('username');

function savedWorkouts(state = initialState, action) {
	if(action.type === 'SAVED_WORKOUTS') {
		return {
			savedWorkoutList: action.data.workouts.filter(item => item.username === username)
		}
	} else { 
		return state
	}
}

export default savedWorkouts