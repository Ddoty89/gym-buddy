const initialState = {
	equipment: []
}

export default function equipmentReducer(state = initialState, action) {
	if(action.type === 'WORKOUT_STORE') {
		return {
			...state,
			equipment: action.equipment
		}	
	} else {
		return state
	}
};