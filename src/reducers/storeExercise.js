const initialState = {
	exercises: []
}

function storeExercise(state = initialState, action) {
	if(action.type === 'STORE_EXERCISE') {
		return {
			...state,
			exercises: [
				...state.exercises,
				{
					equipment: action.equipment,
				    sets: action.sets,
				    repetitions: action.repetitions,
				    weight: action.weight,
				    notes: action.notes
				}
			]
		}
	} else {
		return state
	}
}

export default storeExercise