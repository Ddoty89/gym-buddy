const initialState = {
	equipmentSelected: {}
}

export default function equipmentSelector(state = initialState, action) {
	if(action.type === 'WORKOUT_STORE') {
		return {
			equipment: action.equipment
		}	
	} else {
		return state
	}
};