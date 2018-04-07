const initialState = {
	workouts: []
}

export default function savedWorkouts(state = initialState, action) {
	if(action.type === 'SAVED_WORKOUTS') {
		return {
			...state,
			workouts: action.workouts
		}
	} else { 
		return state
	}
}

