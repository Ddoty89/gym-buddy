const initalState = {
	muscleGroups: {}
}

function muscleGroups(state = initalState, action) {
	if(action.type === 'MUSCLE_GROUP_LIST') {
		return {
			muscleGroups: action.data
		}
	} else {
		return state
	}
}

export default muscleGroups