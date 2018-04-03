const initalState = {
	workedMuscles: {}
}

const equipmentOptions = (state = initalState, action) => {
	if(action.type === 'EQUIPMENT_USED') {
		return {
			workedMuscles: action.workedMuscles
		}
	} 	else {
		return state
	}
}

export default equipmentOptions